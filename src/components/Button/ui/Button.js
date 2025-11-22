export const Button = ({
  buttonText = "Default button"
} = {}) => {
  return (
    `
      <button class="button">
        ${buttonText}
      </button>
    `
  )
}