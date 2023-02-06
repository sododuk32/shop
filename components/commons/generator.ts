export default function generator() {
  const char = '1234562009765210';

  const serialLenght = 10;

  let randomKey = '';
  for (let i = 0; i < serialLenght; ++i) {
    const randomSingle = char[Math.floor(Math.random() * char.length)];
    randomKey += randomSingle;
  }
  return Number(randomKey);
}
