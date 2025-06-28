<script setup>
import { ref, computed } from 'vue'

//Vue 3 Day 8 練習
const name = ref('宸維')
function clearName() {
  name.value = ''
}

//Vue 3 Day 9 事件處理
const count = ref(0)
// 方法寫法
function addOne() {
  count.value += 1
}
function resetCount() {
  count.value = 0
}
// 計算屬性（computed）
const doubleCount = computed(() => count.value * 2)


//Vue 3 Day 10 條件渲染
const loggedIn = ref(false)
const username = ref('宸維')

//Vue 3 Day 10 待辦清單
const todoText = ref('')
const todos = ref([])
function addTodo() {
  //.trim()：把頭尾空白移除
  if (todoText.value.trim() !== '') {
    //.push(...) 是陣列新增元素的寫法
    todos.value.push(todoText.value)
    //這樣按下新增後，輸入框就會自動變空
    todoText.value = ''
  }
}
function removeTodo(idx) {
  //.splice(idx, 1)：意思是「從第 idx 個元素開始，刪掉 1 個」
  todos.value.splice(idx, 1)
}

//Vue 3 Day 11 v-show用法
const show = ref(true)

//Vue 3 Day 11 元件拆分（以 TodoItem 為例）
import TodoItem from './components/TodoItem.vue'

const todoText2 = ref('')
const todos2 = ref([])
const showList = ref(true)

function addTodo2() {
  if (todoText2.value.trim()) {
    todos2.value.push(todoText2.value)
    todoText2.value = ''
  }
}
function removeTodo2(idx) {
  todos2.value.splice(idx, 1)
}
function toggleList() {
  showList.value = !showList.value
}



//Vue 3 Day 12 reactive用法
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: ''
})


//Vue 3 Day 12 watch用法
import { watch } from 'vue'
const form2 = reactive({
  name: ''
})
const hint = ref('')

watch(
  () => form2.name,
  (newVal, oldVal) => {
    if (newVal.length > 0 && newVal.length < 3) {
      hint.value = '名字太短了喔'
    } else {
      hint.value = ''
    }
  }
)

</script>


<template>
  <div class="app-section">
    <h2>Vue 3 Day 8 練習</h2>
    <p>現在的名字是：{{ name }}</p>
    <input class="todo-input" v-model="name" placeholder="請輸入名字" />
    <button @click="clearName">清空</button>
  </div>

  <br />

  <div class="app-section">
    <h2>Vue 3 Day 9 事件處理</h2>
    <p>目前計數：{{ count }}</p>
    <button @click="addOne">+1</button>
    <button @click="resetCount">重置</button>
    <p>雙倍顯示（computed）：{{ doubleCount }}</p>
  </div>

  <br />

  <div class="app-section">
    <h2>Vue 3 Day 10 條件渲染</h2>
    <button @click="loggedIn = !loggedIn">
      {{ loggedIn ? "登出" : "登入" }}
    </button>
    <p v-if="loggedIn">歡迎回來，{{ username }}</p>
    <p v-else>請先登入</p>
  </div>

  <br />
  <div class="app-section">
    <h2>Vue 3 Day 10 待辦清單</h2>
    <!-- @keyup.enter：監聽 input 欄位的「放開按鍵」事件，而且只有 Enter 鍵才觸發 -->
    <input  class="todo-input" v-model="todoText" @keyup.enter="addTodo" placeholder="輸入新任務">
    <button @click="addTodo">新增</button>
    <ul>
      <li v-for="(todo, idx) in todos" :key="idx">
        {{ todo }}
        <button class="del-btn" @click="removeTodo(idx)">刪除</button>
      </li>
    </ul>
    <p v-if="todos.length === 0">（目前沒有待辦事項）</p>
  </div>

  <br />

  <div class="app-section">
    <h2>Vue 3 Day 11 v-show</h2>
    <button @click="show = !show">
      {{ show ? '隱藏' : '顯示' }}說明
    </button>
    <p v-show="show">這是一段可以隱藏或顯示的說明文字（v-show）</p>
  </div>

  <br />
  <div class="app-section">
    <h2>Vue 3 Day 11 元件拆分（以 TodoItem 為例）</h2>
    <input  class="todo-input" v-model="todoText2" @keyup.enter="addTodo2" placeholder="新增待辦">
    <button @click="addTodo2">新增</button>
    <ul>
      <TodoItem v-for="(todo, idx) in todos2" :key="idx" :item="todo" @remove="removeTodo2(idx)" />
    </ul>
    <button @click="toggleList">{{ showList ? '隱藏清單' : '顯示清單' }}</button>
    <ul v-show="showList">
      <li v-for="(todo, idx) in todos2" :key="idx">{{ todo }}</li>
    </ul>
  </div>

  <br />

  <div class="app-section">
    <h2>Vue 3 Day 12 reactive用法</h2>
    <input type="text" v-model="form.name" placeholder="輸入姓名">
    <input type="Email" v-model="form.email" placeholder="輸入 Email">
    <p>姓名：{{ form.name }}</p>
    <p>Email：{{ form.email }}</p>
  </div>

  <br />
  <div class="app-section">
    <h2>Vue 3 Day 12 watch用法</h2>
    <input type="text" v-model="form2.name" placeholder="輸入姓名">
    <p v-if="hint">{{ hint }}</p>
  </div>



</template>




<style>
.app-section {
  background: #f7faff;
  border-radius: 16px;
  box-shadow: 0 2px 8px #0002;
  padding: 28px 18px;
  margin: 30px auto;
  max-width: 500px;
}

.app-section h2 {
  color: #2354a1;
  text-align: center;
  font-weight: bold;
  margin-bottom: 16px;
}

/* 統一所有輸入框美化 */
input[type="text"], input[type="email"], .todo-input {
  background: #fff;
  color: #222;
  border: 2px solid #a5c7f7;
  border-radius: 10px;
  padding: 10px 16px;
  margin-right: 8px;
  font-size: 1.09em;
  box-shadow: 0 1px 5px #9fcfff28;
  outline: none;
  transition: border 0.18s, box-shadow 0.18s;
}
input:focus {
  border: 2px solid #3477eb;
  box-shadow: 0 0 0 2px #90c2fa66;
}

/* 統一按鈕樣式 */
button {
  padding: 8px 20px;
  border-radius: 8px;
  border: none;
  background: #2a81ea;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  margin-right: 5px;
  transition: background 0.18s, box-shadow 0.18s;
  box-shadow: 0 2px 8px #2a81ea22;
}
button:hover {
  background: #1855b7;
}

/* 刪除按鈕特殊色 */
.del-btn {
  background: #ff8181;
  border: none;
  border-radius: 6px;
  padding: 3px 10px;
  color: #fff;
  font-size: 0.95em;
  margin-left: 8px;
  transition: background 0.18s;
  box-shadow: 0 1px 4px #ff818122;
}
.del-btn:hover {
  background: #d22c2c;
}

/* 統一列表區塊 */
ul {
  margin: 0 0 10px 0;
  padding: 0;
  list-style: none;
  background: none;
}

li {
  background: #f4f8ff;
  color: #2a2a2a;
  border-radius: 7px;
  padding: 8px 16px;
  margin-bottom: 9px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.06em;
  box-shadow: 0 1px 4px #2354a122;
}

p {
  color: #222;              /* 深色字體，對比高 */
  font-size: 1.08em;        /* 稍大一點，易讀 */
  line-height: 1.7;         /* 行距拉寬，舒服 */
  margin-bottom: 8px;       /* 每段落之間有空隙 */
  letter-spacing: 0.03em;   /* 微調字距更美觀 */
}
</style>

