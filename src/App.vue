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

</script>


<template>
  <div>
    <h2>Vue 3 Day 8 練習</h2>
    <p>現在的名字是：{{ name }}</p>
    <input v-model="name" placeholder="請輸入名字" />
    <button @click="clearName">清空</button>
  </div>

  <br />

  <div>
    <h2>Vue 3 Day 9 事件處理</h2>
    <p>目前計數：{{ count }}</p>
    <button @click="addOne">+1</button>
    <button @click="resetCount">重置</button>
    <p>雙倍顯示（computed）：{{ doubleCount }}</p>
  </div>

  <br />

  <div>
    <h2>Vue 3 Day 10 條件渲染</h2>
    <button @click="loggedIn = !loggedIn">
      {{ loggedIn ? "登出" : "登入" }}
    </button>
    <p v-if="loggedIn">歡迎回來，{{ username }}</p>
    <p v-else>請先登入</p>
  </div>

  <br />
  <div>
    <h2>Vue 3 Day 10 待辦清單</h2>
    <!-- @keyup.enter：監聽 input 欄位的「放開按鍵」事件，而且只有 Enter 鍵才觸發 -->
    <input v-model="todoText" @keyup.enter="addTodo" placeholder="輸入新任務">
    <button @click="addTodo">新增</button>
    <ul>
      <li v-for="(todo, idx) in todos" :key="idx">
        {{ todo }}
        <button @click="removeTodo(idx)">刪除</button>
      </li>
    </ul>
    <p v-if="todos.length === 0">（目前沒有待辦事項）</p>
  </div>

</template>
