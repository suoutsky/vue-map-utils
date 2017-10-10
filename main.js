import untils from './src/untils.vue'

const install = function (Vue) {
    if (install.installed) return;
    Vue.mixin(untils)
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};

export default {
    install
}
