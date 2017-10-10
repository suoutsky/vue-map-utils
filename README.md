# vue-map-utils



## Description

A vue component for vue component map  digital computation.

Vue组件,用于Vue组件的浮点数计算,修复js计算的精度丢失问题

## Installation

    npm install vue-map-utils
   
## Usage

    import vueMapUtils from 'vue-map-utils'
    Vue.use(vueMapUtils)

### 基础用法
```javascript
   /**
    ** 加法函数，用来得到精确的加法结果
    ** 说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
    ** 调用：accAdd(arg1,arg2)
    ** 返回值：arg1加上arg2的精确结果
    **/
   this.float(arg1, arg2);
 ```  

## License

[MIT](https://opensource.org/licenses/MIT)


