function getGeneratedCommentForm(form) {
  if (form.some(({value}) => !value)) {
    alert('내용을 모두 입력해주세요.');
    return;
  }

  const [
    name,
    version,
    description,
    range
  ] = form;

  return `[해결버전]
${name.value} ${version.value}에서 해결하였습니다.

[작업내용]
${description.value}
    
[영향범위]
${range.value}
`;
}

function createVirtualTextarea(value) {
  const textarea = document.createElement('textarea');
  textarea.style.opacity = 0;
  textarea.style.position = 'absolute';
  textarea.style.bottom = 0;
  textarea.value = value;
  document.body.appendChild(textarea);

  return textarea;
}

function copyToClipboard(element) {
  element.focus();
  element.select();
  document.execCommand('copy');
}

function showCopiedTextAnimation() {
  const [copiedText] = [...document.getElementsByClassName('copied')];
  copiedText.classList.remove('copied-animation');
  setTimeout(() => copiedText.classList.add('copied-animation'), 0);
}

(function main() {
  const generateBtn = document.getElementById('generate-btn');
  const [
    name,
    version,
    range
  ] = [...document.getElementsByTagName('input')];
  const [description] = [...document.getElementsByTagName('textarea')];
  const form = [
    name,
    version,
    description,
    range
  ];

  generateBtn.addEventListener('click', () => {
    const generatedCommentForm = getGeneratedCommentForm(form);

    if (getGeneratedCommentForm) {
      const textarea = createVirtualTextarea(generatedCommentForm);
      copyToClipboard(textarea);
      showCopiedTextAnimation();
    }
  });
})();
