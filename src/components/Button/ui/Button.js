export const Button = ({
  buttonText = "Click"
} = {}) => {
  return (
    `
      <button class="button">
        ${buttonText}
      </button>
    `
  )
}