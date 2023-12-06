export const Copy = (el) => {
    const text = el.current.innerHTML
    navigator.clipboard.writeText(text)  
  }
