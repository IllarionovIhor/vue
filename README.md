# Лабораторніі роботи з Vue.js

## Студент: Ілларіонов Ігор (ВТ-22-2)
 
### Список робіт

1. [Lab 1 - Знайомство з Vue.js 3]
2. [Lab 2 - Взаємодія між компонентами та роутинг у Vue.js]
3. [Lab3 - Стилізація компонентів у Vue.js]
4. [Lab 4 - Управління станом (Pinia), локалізація (vue-i18n) та валідація форм (VeeValidate) у Vue 3]
5. [Lab 5 - Використання інтерфейсних бібліотек (PrimeVue)]

### Опис кроків запуску:

1. `git clone https://github.com/IllarionovIhor/vue`
2. `npm install`
3. `npm run dev`

## Опис де застосовані ref/reactive,  watch

1. В лабораторній було використано лише `ref()`. В даній лабораторній він використовується для створення реактивних змінних, таких як :

    - для відстеження змін копії оригінального масиву:
   
`const originalItems = ref([...allItems.value]);`

    
Для реактивності змінних заголовка, опису та ідентифікатора:

     const items = ref('')
     const description = ref('')
     const updId = ref(null)

Використані директиви:

2. В межах лабораторної роботи були використані такі директиви:

     v-model
     (@)
     v-if/else
     :model-value
     v-for
     v-bind

`v-model`  - було використано для, наприклад 

``` html 
<input type="text" v-model="items" placeholder="Введіть заголовок" />
```

щоб змінювати вхідні дані для оновлення змінної

`v-for` - для відтворення списків

`v-if/else` - для умовного відтворення списку:

``` js 
     <li v-for="(task) in allItems" :key="task.id"  class="items">
      <div v-if="task.id === updId">
        <Editing :task="task" @save="handleSave"/>
      </div>
      <div v-else>
        <CheckList :task="task" @delete="handleDelete" @edit="editing"/>
      </div>
    </li>
   ```

`:model-value` - для одностороннього прив'язування:

``` js
    <VueDatePicker :model-value="props.task.date ? new Date(props.task.date) : null"/>
```

`v-bind` - для прив'язки атрибутів до виразу:

```html
  <input type="checkbox" :checked="props.task.status" @change="handleToggleStatus(props.task)" >
```

`(@)` - для прослуховування подій та запуску методів при виконанні події:

```  html
  <button @click="handleSave" type="button">Зберегти</button>
```

при кліку викликається метод `handleSave`

3. Watch - був використаний для відстеження змін реактивних елементів

```js

 watch(
     () => props.allItems,
    (newVal) => {
        list.value = [...newVal]
    },
    {  deep: true }
)

```

## Скріншоти функціоналу:

![IMAGE](/images/lab1/image.png)
![IMAGE](/images/lab1/image2.png)
![IMAGE](/images/lab1/image3.png)
![IMAGE](/images/lab1/image4.png)


## Опис де застосовано `props/emits`

props/emits були використані в компонентах RegisterForm/LoginForm

``` js
const props = defineProps({
formData: Object,
form: Boolean
})
```

``` js 
const emit = defineEmits(['submit']);
```
## Опис де застосовано `v-model`

Використано для можливості зміни значення в полях

```js

  <v-text-field 
      v-model="props.formData.email" 
      rules="[required, emailRules]"
      label="Email"
  />
```

## Опис де застосовано `provide/inject`

`provide` було застосовано в батьківському компоненті App.vue, для передачі функцій та змінних до дочірніх компонентів:

```js
import { ref, provide } from 'vue'

/*
* const authUser = ...
* const is Authenticated = ...

* function login() {...}

* function logiut() {...}
* */

provide('auth', {
    authUser,
    isAuthenticated,
    login,
    logout,
})
```

`inject` було застосовано уже в дочірніх компонентах для приймання значень від батьківського компонента

```vue
import {inject} from "vue";

const auth = inject('auth')
    
    <div v-if="auth.isAuthenticated.value" class= "border-sm pa-10 ma-4 rounded-lg">
        /*{...}*/
    </div>
```

```js
function onSubmit() {
    
    /*логіка при відправлянні форми*/
    
    auth.login(user) //виклик фукції з батьківського компонента
}
```

## Опис роутинга

#### Створено інстанс роутера, та задано збереження маршрутів, налаштування режиму історії, налаштування скролу та guard`ів:

```js
const router = createRouter({
history: createWebHistory(),
scrollBehavior: () => ({ y: -1 }),
routes: routes,
linkActiveClass: 'is-active',
});
```

#### Guard, функція яка перевіряє доступ до роутів:

Дана функція перевіряє доступ перед переходом

```js
router.beforeEach((to, from) => {
    const isAuthenticated = !!localStorage.getItem('authU')
    if(to.meta.requiresAuth && !isAuthenticated) {
        return {name: 'login'};
    }

})
```

#### Самі маршрути описано в іншому файлі:

Кожен маршрут має `name`, `path`, `component`, та можуть мати `meta`, `children`

```js
export const routes =  [
    {
        name: 'header',
        path: '/',
        component: () => import('@/views/HeaderView.vue'),
        children: [
            {
                name: 'admin',
                path: '/admin',
                children: [
                    {
                        name: 'admin.page',
                        path: '',
                        component: () => import('@/views/Admin/AdminView.vue'),
                        meta: {
                            title: 'Admin',
                            requiresAuth: true
                        }
                    }]
            }]
    }]
```
#### Lazy-loading дозволяє компонентам завантажуватися лише тоді коли він потрібен:

```js
{
    component: () => import('@/views/Admin/AdminView.vue')
}
```

### Скріншоти функціоналу:

![IMAGE](/images/lab2/image5.png)
![IMAGE](/images/lab2/image6.png)
![IMAGE](/images/lab2/image7.png)
![IMAGE](/images/lab2/image8.png)
![IMAGE](/images/lab2/image9.png)

## Опис лабораторної №3

* В лабораторній роботі було реалізовано модальне вікно, його було створено через компонент `<Teleport />`
`<Teleport>` забезпечує вийти за межі вкладеної структури DOM.
Через об'єкт `to=""`, ми по суті "телепортуємо" шаблон до тегу який вказано в об'єкті

#### Приклад в коді:

```vue
  <Teleport to="body">
    <div v-if="modelValue" class="modal-overlay">
      <div class="modal-content">
      <p>You are open modal</p>
      <button @click="emit('update:modelValue', false)">Close</button>
    </div>
    </div>
  </Teleport>
```

* Для плавного переходу між сторінками було використано компонент `<Transition />`

* Його можна використовувати для застосування анімації входу та виходу до елементів або компонентів, переданих йому через слот за замовчуванням.

#### Приклад використання:
```vue
<Transition
enter-active-class="fade-enter-active"
enter-from-class="fade-enter-from"
leave-active-class="fade-leave-active"
leave-from-class="fade-leave-from"
>
  
  /*content*/
  
</Transition>
```

* Динамічні компоненти перемикаються за допомогою <component>спеціального елемента:

```vue
<RouterView v-slot="{ Component }">
<component :is="Component" />
</RouterView>
```
* У межах лабораторної роботи всі стилі прописувалися у SFC CSS


* Коли `<style>` тег має `scoped` атрибут , його CSS застосовуватиметься лише до елементів поточного компонента.

#### Приклад в компоненті (Стилі для футера):

```vue
<style scoped>
  
.footer {
  /*style*/
}

.container {
    /*style*/
}

.links .nav-link{
   /*style*/
}

.links .nav-link:hover {
    /*style*/
}

</style>
```

### Скріншоти

![IMAGE](/images/lab3/image9.png)
![IMAGE](/images/lab3/image10.png)
![IMAGE](/images/lab3/image11.png)
![IMAGE](/images/lab3/image12.png)






### Опис лабораторної №4

### Pinia 

* Ініціалізація

```js
const pinia = createPinia();

pinia.use(piniaPluginPersistedstate)

createApp(App)
    .use(pinia)
```

* defineStore

Відповідає за створення окремого місця, щоб зберігати глобальні дані та логіку.

Стор містить:
* Стан (state)
* Getters
* Actions

#### Приклад:

```js

import {defineStore} from "pinia";

export const useCartStore = defineStore("cartStore" ,{
  state: () => ({
      items: [],
  }),

    getters: {
        totalItems() {
          return this.items.length;
        },

        totalPrice() {
            return this.items.reduce((sum, item) => sum + item.price * item.qty, 0)
        }

    },

    actions: {
        add(item) {
            this.items.find(i => i.id === item.id) ?  item.qty += 1 : this.items.push(item);
        },

        remove(id) {
           this.items = this.items.filter(item => item.id !== id);
        },

        clear() {
           this.items = [];
        }
    }


})

```

У даному сторі міститься стан який зберігає в масиві дані, геттери - методи які підраховують заггальну ціну/загальну кількість, та actions яккі змінюють state

### Persistedstate (pick/omit, custom key);

```js
{
    persist: {
            key: 'settings',
            pick: ['locale'],
            paths: ['locale']
    }
}
```

### i18n

```js
const i18n = createI18n({
    legacy: false, /*composition api*/
    locale: defaultLocale, /*мова за замовчуванням*/
    fallbackLocale: "en", /*мова до якої слід звернутися якщо не знайдено іншу мову*/
    messages: lang /*повідомлення локалізації, які потрібно перекладати за допомогою API перекладу*/
})
```

* Синхронізація з settings.locale

### VeeValidate

**useField** - керування значеннями поля

**useForm** - Керує всіма полями форми: значеннями, станом надсилання,
помилками.

**FieldArray** - компонент длякерування динамічними списками полів безпосередньо
в шаблоні

**validationSchema (Yup)** - бібліотека для декларативної валідації JavaScript-об’єктів і структур із різними типами даних.


![IMAGE](/images/lab4/image13.png)
![IMAGE](/images/lab4/image14.png)
![IMAGE](/images/lab4/image15.png)
![IMAGE](/images/lab4/image16.png)
![IMAGE](/images/lab4/image17.png)




## Лабораторна №5
### Які секції реалізовано:

#### Hero-секція
![IMAGE](/images/lab5/image20.png)
#### Проблема-рішення секція
![IMAGE](/images/lab5/image28.png)
#### Форма
![IMAGE](/images/lab5/image18.png)
#### FAQ-секція
![IMAGE](/images/lab5/image27.png)
#### Reviews-секція
![IMAGE](/images/lab5/image22.png)
#### Plans-секція
![IMAGE](/images/lab5/image26.png)
#### Stepper-секція
![IMAGE](/images/lab5/image24.png)
#### Header-секція
![IMAGE](/images/lab5/image19.png)
#### Footer-секція
![IMAGE](/images/lab5/image29.png)
#### Advantages-секція
![IMAGE](/images/lab5/image21.png)


### Які компоненти PrimeVue використано:

* ```<Card/>``` - використано у секції "Тарифи/плани" та FAQ
* ```<Stepper/>``` - використано у секції "Як це працює" для показу кроків які допоможуть користувачу в правильному використанні сайту
* ```<Acoordion/>``` - використано у секції "Проблема-рішення"
* ```<Form/>``` - використано для побудови форми
* ```<Messages/>``` - використано у секції форми, для показу повідомлень
* ```<Toast/>``` - використано глобально, але використовується для показу повідомлення про успішну складену форму та скопійований об'єкт
* ```<Carousel/>``` - використано у секції "Переваги"
* ```<Fieldset/>``` - використано у секції "Відгуки" 

### Опис плагіна  CopyToClipboardPlugin

Сам плагін складається з методу install та app.directive (для реалізації директив)

```js 
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
```
Також є функція, яка відповідає за логіку самого копіювання ***copyText()***

```js
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
```
* Функція приймає такі параметри: app, bind, element


* Оголошена змінна const text зберігає в собі значення яке знаходиться в середині елементів та передане значення директиві


* За допомогою navigator.clipboard.writeText() і відбувається саме копіювання в буфер обміну


* app.config.globalProperties.$toast.add через глобальний toast-сервіс показуємо повідомлення про успішне копіювання








  






     




