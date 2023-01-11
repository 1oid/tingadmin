import {createVNode} from "vue";
import * as $Icon from '@ant-design/icons-vue'

type IconType = keyof typeof $Icon

export const getAssetsIcon = (url: string) => {
    return new URL(`../assets/icons/${url}`, import.meta.url).href
}

export const getAssets = (url: string) => {
    return new URL(`../assets/${url}`, import.meta.url).href
}


export const Icon = (props: {icon: string}) => {
    const {icon} = props
    return createVNode($Icon[icon as IconType]);
};