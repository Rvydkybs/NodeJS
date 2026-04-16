const fs = require("fs");
const path = require("path");
const { Transform, pipeline } = require("stream");

const DEMO_DIR = __dirname;
const INPUT_PATH = path.join(DEMO_DIR, "stream-input.txt");
const COPY_PATH = path.join(DEMO_DIR, "stream-copy.txt");
const UPPER_PATH = path.join(DEMO_DIR, "stream-upper.txt");

function ensureDemoInput() {
  if (fs.existsSync(INPUT_PATH)) return;

  const lines = [];
  for (let i = 1; i <= 2000; i++) {
    lines.push(`Line ${i} - Node.js streams demo yazisi.`);
  }
  fs.writeFileSync(INPUT_PATH, lines.join("\n") + "\n", "utf8");
}

function printHelp() {
  console.log(
    [
      "Kullanim:",
      "  node streams.js read    # Readable: chunk chunk okur (event'ler)",
      "  node streams.js copy    # pipe(): input -> copy (backpressure otomatik)",
      "  node streams.js upper   # Transform: input -> uppercase -> output",
      "",
      "Not: Ilk calistirmada ornek input dosyasi olusturulur:",
      `  ${path.basename(INPUT_PATH)}`,
    ].join("\n"),
  );
}

function readDemo() {
  ensureDemoInput();

  const rs = fs.createReadStream(INPUT_PATH, {
    encoding: "utf8",
    highWaterMark: 64 * 1024,
  });

  let chunkCount = 0;
  let totalChars = 0;

  rs.on("data", (chunk) => {
    chunkCount++;
    totalChars += chunk.length;
    console.log(`chunk #${chunkCount} geldi (chars: ${chunk.length})`);
  });

  rs.on("end", () => {
    console.log(`bitti. chunk sayisi: ${chunkCount}, toplam chars: ${totalChars}`);
  });

  rs.on("error", (err) => {
    console.error("read hata:", err);
  });
}

function copyDemo() {
  ensureDemoInput();

  const rs = fs.createReadStream(INPUT_PATH);
  const ws = fs.createWriteStream(COPY_PATH);

  pipeline(rs, ws, (err) => {
    if (err) {
      console.error("copy hata:", err);
      return;
    }
    console.log(`kopyalandi: ${path.basename(INPUT_PATH)} -> ${path.basename(COPY_PATH)}`);
  });
}

function upperDemo() {
  ensureDemoInput();

  const upper = new Transform({
    transform(chunk, _enc, cb) {
      cb(null, chunk.toString("utf8").toUpperCase());
    },
  });

  const rs = fs.createReadStream(INPUT_PATH);
  const ws = fs.createWriteStream(UPPER_PATH);

  pipeline(rs, upper, ws, (err) => {
    if (err) {
      console.error("upper hata:", err);
      return;
    }
    console.log(`olusturuldu: ${path.basename(UPPER_PATH)}`);
  });
}

const command = (process.argv[2] || "").toLowerCase();

if (!command || command === "help" || command === "--help" || command === "-h") {
  printHelp();
} else if (command === "read") {
  readDemo();
} else if (command === "copy") {
  copyDemo();
} else if (command === "upper") {
  upperDemo();
} else {
  console.log(`Bilinmeyen komut: ${command}\n`);
  printHelp();
}
