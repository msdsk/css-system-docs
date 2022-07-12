import { h, Component } from 'vue'

const CSSDocumentation: Component = async (props, context) => {
  const slug = (props.slug as string[]).join("/").replace(/([^/]*)$/, "_$1")
  console.log(slug)
  const cssTxt = await import(/* @vite-ignore */ `../css/${slug}.scss?raw`)
  console.log(cssTxt)
  return h('div', { class: 'test' })
}
export default CSSDocumentation
