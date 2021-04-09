import Vue from 'vue'
import DateTime from '../components/DateFormatter/DateTime'

const components = {
  DateTime
}

Object
  .entries(components)
  .forEach(([name, c]) => {
    Vue.component(name, c)
  })
