export const copyText = (app, bind, element) => {
    const text = bind.value || element.innerText
    navigator.clipboard.writeText(text).then(() => {
        app.config.globalProperties.$toast.add({
            severity: 'info',
            summary: 'Copied Text',
            detail: text,
            life: 4000
        });
    })
}