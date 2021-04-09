<script>
import { formatDateTime } from '../../utils/date'
export default {
  functional: true,
  render (h, context) {
    try {
      const vnode = context.children[0]
      const date = vnode.text.replace(/(\s|\n)/g, '')
      vnode.text = formatDateTime(date)
      return vnode
    } catch (e) {
      return null
    }
  }
}
</script>
