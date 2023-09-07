
htmx.onLoad((content) => {

  /**
   * From https://www.roboleary.net/2022/01/13/copy-code-to-clipboard-blog.html
   */

  const copyButtonLabel = "Copy";

  // use a class selector if available
  let blocks = content.querySelectorAll("pre");
  
  blocks.forEach((block) => {
    // logic to skip column of line numbers when codeblock linenos=true
    const p = block.parentElement;
    const gp = p.parentElement;
    if (p.classList.contains('lntd') && gp.firstElementChild == p) {
      return;
    }
    // make code block tabbable to allow potential scrolling with keyboard
    block.firstChild.setAttribute('tabindex', 0);
    // only add button if browser supports Clipboard API
    if (navigator.clipboard) {
      let button = document.createElement("button");
      button.innerText = copyButtonLabel;
      block.insertBefore(button, block.firstChild);
      button.addEventListener("click", async () => {
        await copyCode(block, button);
      });
    }
  });
  
  async function copyCode(block, button) {
    let code = block.querySelector("code");
    let text = code.innerText;
    await navigator.clipboard.writeText(text);
    button.innerText = "Copied";
    setTimeout(() => {
      button.innerText = copyButtonLabel;
    }, 800);
  }
  
});
