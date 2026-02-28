import {copyText} from "../utils/copyFunc.js";

export default {
    install: (app, options) => {
        app.directive('copy', {
                mounted(el, binding) {
                    el.copy = ()=> copyText(app, binding, el)
                    el.addEventListener('click', el.copy)
                },
                unmounted(el) {
                    el.removeEventListener('click', el.copy);
                    delete el.copy;
                },
            }
        );
      }
}