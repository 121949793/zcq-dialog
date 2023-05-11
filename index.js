import { createApp } from "vue";
import dialog from './dialog.vue'
import {root,obj,vnode} from './setData'

function mountComponent(rootComp){
  document.body.appendChild(root); // 在dom节点中添加父节点
  const app = createApp(rootComp)
  vnode.value = app
  app.mount(root)
}
export function $dialog(data){
  obj.value = data
  mountComponent(dialog)
}

export {root}