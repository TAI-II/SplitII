const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const emit = defineEmits(['setPage']);
const __VLS_fnComponent = (await import('vue')).defineComponent({
    emits: {},
});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full flex flex-col h-screen gap-8 items-center justify-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ disabled: (true), ...{ class: ("w-full h-28 flex flex-col px-2 items-center justify-center text-zinc-500 bg-zinc-300 border-zinc-500 rounded-2xl border-[3px]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.emit('setPage', 'createBillManualInsertion');
            } }, ...{ class: ("w-full h-28 flex flex-col items-center px-2 justify-center bg-secondary hover:bg-primary button-style") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-center") }, });
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['h-screen'];
    __VLS_styleScopedClasses['gap-8'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['h-28'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['px-2'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['text-zinc-500'];
    __VLS_styleScopedClasses['bg-zinc-300'];
    __VLS_styleScopedClasses['border-zinc-500'];
    __VLS_styleScopedClasses['rounded-2xl'];
    __VLS_styleScopedClasses['border-[3px]'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['h-28'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['px-2'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['bg-secondary'];
    __VLS_styleScopedClasses['hover:bg-primary'];
    __VLS_styleScopedClasses['button-style'];
    __VLS_styleScopedClasses['text-center'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            emit: emit,
        };
    },
    emits: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
});
;
