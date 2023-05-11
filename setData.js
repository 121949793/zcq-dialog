import { ref } from "vue";

export let obj = ref({})
export let vnode = ref(null)

export let root =  document.createElement('div');

export let close = ()=>{
  root.remove()
  vnode.value.unmount()
}
