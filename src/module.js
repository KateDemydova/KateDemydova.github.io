export function handleButtonClick(buttonId, message) {

  const button = document.getElementById(buttonId);

  if (!button) {
    console.error(`Кнопка з ID "${buttonId}" не знайдена.`);
    return;
  }

  button.addEventListener("click", () => {
    console.log(message);
  });
}

