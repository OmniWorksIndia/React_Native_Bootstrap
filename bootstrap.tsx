import { Platform, StyleSheet, Dimensions } from "react-native";
import { ViewStyle, StyleProp, TextStyle, } from "react-native";
import deepmerge from "deepmerge";
import custom from "./custom";
const { width, height } = Dimensions.get("window");

interface RootType {
    "-blue": string;
    "-indigo": string;
    "-purple": string;
    "-pink": string;
    "-red": string;
    "-orange": string;
    "-yellow": string;
    "-green": string;
    "-teal": string;
    "-cyan": string;
    "-white": string;
    "-gray": string;
    "-grayDark": string;
    "-light": string;
    "-lighter": string;
    "-primary": string;
    "-secondary": string;
    "-success": string;
    "-info": string;
    "-warning": string;
    "-danger": string;
    "-dark": string;
    "-default": string;
    "-neutral": string;
    "-darker": string;
    "-breakpointXs": number;
    "-breakpointSm": number;
    "-breakpointMd": number;
    "-breakpointLg": number;
    "-breakpointXl": number;
    "-breakpointXXl": number;
    "--bs-font-roboto-regular": string;
    "--bs-font-sans-serif": string;
    "-bsGutterY": string;
    "-bsGutterX": number;
    "--bs-gutter-x": number;
    "--bs-gutter-y": number;
    fontSize: number;
    [x: string]: any;
}

const root: RootType = {
    "-blue": "#5e72e4",
    "-indigo": "#5603ad",
    "-purple": "#8965e0",
    "-pink": "#f3a4b5",
    "-red": "#f5365c",
    "-orange": "#fb6340",
    "-yellow": "#ffd600",
    "-green": "#2dce89",
    "-teal": "#11cdef",
    "-cyan": "#2bffc6",
    "-white": "#fff",
    "-gray": "#8898aa",
    "-grayDark": "#32325d",
    "-light": "#adb5bd",
    "-lighter": "#e9ecef",
    "-primary": "#5e72e4",
    "-secondary": "#f7fafc",
    "-success": "#2dce89",
    "-info": "#11cdef",
    "-warning": "#fb6340",
    "-danger": "#f5365c",
    "-dark": "#212529",
    "-default": "#172b4d",
    "-neutral": "#fff",
    "-darker": "black",
    "-breakpointXs": 0,
    "-breakpointSm": 576,
    "-breakpointMd": 768,
    "-breakpointLg": 992,
    "-breakpointXl": 1200,
    "-breakpointXXl": 1200,
    "--bs-font-roboto-regular": "Roboto-Regular",
    "--bs-font-sans-serif": "sans-serif",
    "-bsGutterY": "0",
    "-bsGutterX": 1.5 * 16,
    fontSize: 16,
    "--bs-gutter-x": 0,
    "--bs-gutter-y": 1.5 * 16,
}
export const rem = (e: number) => e * root.fontSize;

const col_sm = {
    col_sm_auto: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "auto"
    },
    col_sm_1: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "8.33333333%"
    },
    col_sm_2: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "16.66666667%"
    },
    col_sm_3: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "25%"
    },
    col_sm_4: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "33.33333333%"
    },
    col_sm_5: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "41.66666667%"
    },
    col_sm_6: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "50%"
    },
    col_sm_7: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "58.33333333%"
    },
    col_sm_8: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "66.66666667%"
    },
    col_sm_9: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "75%"
    },
    col_sm_10: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "83.33333333%"
    },
    col_sm_11: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "91.66666667%"
    },
    col_sm_12: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "100%"
    },
    offset_sm_0: {
        marginLeft: 0
    },
    offset_sm_1: {
        marginLeft: "8.33333333%"
    },
    offset_sm_2: {
        marginLeft: "16.66666667%"
    },
    offset_sm_3: {
        marginLeft: "25%"
    },
    offset_sm_4: {
        marginLeft: "33.33333333%"
    },
    offset_sm_5: {
        marginLeft: "41.66666667%"
    },
    offset_sm_6: {
        marginLeft: "50%"
    },
    offset_sm_7: {
        marginLeft: "58.33333333%"
    },
    offset_sm_8: {
        marginLeft: "66.66666667%"
    },
    offset_sm_9: {
        marginLeft: "75%"
    },
    offset_sm_10: {
        marginLeft: "83.33333333%"
    },
    offset_sm_11: {
        marginLeft: "91.66666667%"
    },
    card: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minWidth: 0,
        wordWrap: "break-word",
        backgroundColor: "#fff",
        backgroundClip: "border-box",
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.125)",
        borderStyle: "solid",
        borderTopLeftRadius: rem(0.25),
        borderTopRightRadius: rem(0.25),
        borderBottomRightRadius: rem(0.25),
        borderBottomLeftRadius: rem(0.25),
    }
}
const col_md = {
    col_md_auto: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "auto"
    },
    col_md_1: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "8.33333333%"
    },
    col_md_2: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "16.66666667%"
    },
    col_md_3: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "25%"
    },
    col_md_4: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "33.33333333%"
    },
    col_md_5: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "41.66666667%"
    },
    col_md_6: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "50%"
    },
    col_md_7: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "58.33333333%"
    },
    col_md_8: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "66.66666667%"
    },
    col_md_9: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "75%"
    },
    col_md_10: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "83.33333333%"
    },
    col_md_11: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "91.66666667%"
    },
    col_md_12: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "100%"
    },
    offset_md_0: {
        marginLeft: 0
    },
    offset_md_1: {
        marginLeft: "8.33333333%"
    },
    offset_md_2: {
        marginLeft: "16.66666667%"
    },
    offset_md_3: {
        marginLeft: "25%"
    },
    offset_md_4: {
        marginLeft: "33.33333333%"
    },
    offset_md_5: {
        marginLeft: "41.66666667%"
    },
    offset_md_6: {
        marginLeft: "50%"
    },
    offset_md_7: {
        marginLeft: "58.33333333%"
    },
    offset_md_8: {
        marginLeft: "66.66666667%"
    },
    offset_md_9: {
        marginLeft: "75%"
    },
    offset_md_10: {
        marginLeft: "83.33333333%"
    },
    offset_md_11: {
        marginLeft: "91.66666667%"
    }
}
const col_lg = {
    col_lg_auto: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "auto"
    },
    col_lg_1: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "8.33333333%"
    },
    col_lg_2: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "16.66666667%"
    },
    col_lg_3: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "25%"
    },
    col_lg_4: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "33.33333333%"
    },
    col_lg_5: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "41.66666667%"
    },
    col_lg_6: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "50%"
    },
    col_lg_7: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "58.33333333%"
    },
    col_lg_8: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "66.66666667%"
    },
    col_lg_9: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "75%"
    },
    col_lg_10: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "83.33333333%"
    },
    col_lg_11: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "91.66666667%"
    },
    col_lg_12: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "100%"
    },
    offset_lg_0: {
        marginLeft: 0
    },
    offset_lg_1: {
        marginLeft: "8.33333333%"
    },
    offset_lg_2: {
        marginLeft: "16.66666667%"
    },
    offset_lg_3: {
        marginLeft: "25%"
    },
    offset_lg_4: {
        marginLeft: "33.33333333%"
    },
    offset_lg_5: {
        marginLeft: "41.66666667%"
    },
    offset_lg_6: {
        marginLeft: "50%"
    },
    offset_lg_7: {
        marginLeft: "58.33333333%"
    },
    offset_lg_8: {
        marginLeft: "66.66666667%"
    },
    offset_lg_9: {
        marginLeft: "75%"
    },
    offset_lg_10: {
        marginLeft: "83.33333333%"
    },
    offset_lg_11: {
        marginLeft: "91.66666667%"
    }
}
const col_xl = {
    col_xl_auto: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "auto"
    },
    col_xl_1: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "8.33333333%"
    },
    col_xl_2: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "16.66666667%"
    },
    col_xl_3: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "25%"
    },
    col_xl_4: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "33.33333333%"
    },
    col_xl_5: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "41.66666667%"
    },
    col_xl_6: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "50%"
    },
    col_xl_7: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "58.33333333%"
    },
    col_xl_8: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "66.66666667%"
    },
    col_xl_9: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "75%"
    },
    col_xl_10: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "83.33333333%"
    },
    col_xl_11: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "91.66666667%"
    },
    col_xl_12: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "100%"
    },
    offset_xl_0: {
        marginLeft: 0
    },
    offset_xl_1: {
        marginLeft: "8.33333333%"
    },
    offset_xl_2: {
        marginLeft: "16.66666667%"
    },
    offset_xl_3: {
        marginLeft: "25%"
    },
    offset_xl_4: {
        marginLeft: "33.33333333%"
    },
    offset_xl_5: {
        marginLeft: "41.66666667%"
    },
    offset_xl_6: {
        marginLeft: "50%"
    },
    offset_xl_7: {
        marginLeft: "58.33333333%"
    },
    offset_xl_8: {
        marginLeft: "66.66666667%"
    },
    offset_xl_9: {
        marginLeft: "75%"
    },
    offset_xl_10: {
        marginLeft: "83.33333333%"
    },
    offset_xl_11: {
        marginLeft: "91.66666667%"
    }
}
const col_xxl = {
    col_xxl_auto: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "auto"
    },
    col_xxl_1: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "8.33333333%"
    },
    col_xxl_2: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "16.66666667%"
    },
    col_xxl_3: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "25%"
    },
    col_xxl_4: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "33.33333333%"
    },
    col_xxl_5: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "41.66666667%"
    },
    col_xxl_6: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "50%"
    },
    col_xxl_7: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "58.33333333%"
    },
    col_xxl_8: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "66.66666667%"
    },
    col_xxl_9: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "75%"
    },
    col_xxl_10: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "83.33333333%"
    },
    col_xxl_11: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "91.66666667%"
    },
    col_xxl_12: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "100%"
    },
    offset_xxl_0: {
        marginLeft: 0
    },
    offset_xxl_1: {
        marginLeft: "8.33333333%"
    },
    offset_xxl_2: {
        marginLeft: "16.66666667%"
    },
    offset_xxl_3: {
        marginLeft: "25%"
    },
    offset_xxl_4: {
        marginLeft: "33.33333333%"
    },
    offset_xxl_5: {
        marginLeft: "41.66666667%"
    },
    offset_xxl_6: {
        marginLeft: "50%"
    },
    offset_xxl_7: {
        marginLeft: "58.33333333%"
    },
    offset_xxl_8: {
        marginLeft: "66.66666667%"
    },
    offset_xxl_9: {
        marginLeft: "75%"
    },
    offset_xxl_10: {
        marginLeft: "83.33333333%"
    },
    offset_xxl_11: {
        marginLeft: "91.66666667%"
    },

}
const isValid = (e) => !(e === undefined || e === null || e === '')

const varCal = (key: string, value?: any) => {
    return isValid(root[key]) ? root[key] : value
};

const calc = (left: string | number, operator: string, right: string | number): number => {
    const leftVal: number = typeof (left) == "number" ? left : left.includes("rem") ? rem(parseFloat(left.trim().replace('rem', ''))) : left.includes("vw") ? parseFloat(left.trim().replace('vw', '')) * 0.01 * width : parseFloat(left);
    const rightVal: number = typeof (right) == "number" ? right : right.includes("rem") ? rem(parseFloat(right.trim().replace('rem', ''))) : right.includes("vw") ? parseFloat(right.trim().replace('vw', '')) * 0.01 * width : parseFloat(right);
    return operator == '-' ? leftVal - rightVal : operator == '*' ? leftVal * rightVal : leftVal + rightVal;
}

const appendToStyle = (obj) => {
    Object.keys(obj).forEach((key) => {
        style[key] = obj[key];
    })
}


interface StyleProps {
    row: StyleProp<ViewStyle>,
    [x: string]: any
}

const style: StyleProps = {
    body: {
        margin: 0,
        padding: 0,
        fontFamily: Platform.select({
            android: root['--bs-font-sans-serif'],
            default: root['--bs-font-roboto-regular']
        }),
        fontSize: rem(1),
        fontWeight: "400",
        lineHeight: "1.5",
        color: "#212529",
        backgroundColor: "#fff"
    },
    main: {
        marginLeft: rem(5),
        padding: rem(1)
    },
    main_hover: {
        marginLeft: rem(16)
    },
    navbar: {
        width: rem(5),
        height: height,
        position: "fixed",
        display: "flex",
        backgroundColor: varCal('-darker'),
        opacity: 1
    },
    navbar_nav: {
        padding: 0,
        margin: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%"
    },
    nav_item: {
        width: "100%"
    },
    nav_icon: {
        minWidth: rem(2),
        marginLeft: rem(1.5),
        marginRight: rem(1.5),
        marginTop: 0,
        marginBottom: 0
    },
    nav_link: {
        display: "flex",
        alignItems: "center",
        height: rem(5),
        color: varCal("-blue"),
        flexDirection: "row"
    },
    link_text: {
        display: "none",
        marginLeft: rem(1),
        color: varCal('-white')
    },
    navbar_hover: {
        width: rem(16),
    },
    h1: {
        marginTop: "0",
        marginBottom: "0.5rem",
        fontWeight: "500",
        lineHeight: "1.2",
        fontSize: calc('1.375rem', '+', '1.5vw')
    },
    h2: {
        marginTop: "0",
        marginBottom: "0.5rem",
        fontWeight: "500",
        lineHeight: "1.2",
        fontSize: calc('1.325rem', '+', '0.9vw')
    },
    h3: {
        marginTop: "0",
        marginBottom: "0.5rem",
        fontWeight: "500",
        lineHeight: "1.2",
        fontSize: calc('1.3rem', '+', '0.6vw')

    },
    h4: {
        marginTop: "0",
        marginBottom: "0.5rem",
        fontWeight: "500",
        lineHeight: "1.2",
        fontSize: calc('1.275rem', '+', '0.3vw')
    },
    h5: {
        marginTop: "0",
        marginBottom: "0.5rem",
        fontWeight: "500",
        lineHeight: "1.2",
        fontSize: rem(1.25)

    },
    h6: {
        marginTop: "0",
        marginBottom: "0.5rem",
        fontWeight: "500",
        lineHeight: "1.2",
        fontSize: rem(1)
    },
    p: {
        marginTop: "0",
        marginBottom: rem(1)
    },
    sub: {
        fontSize: rem(0.75),
        lineHeight: 0,
        bottom: "-0.25em"
    },
    fieldset: {
        minWidth: "0",
        padding: "0",
        margin: "0",
        border: "0"
    },
    legend: {
        float: "left",
        width: "100%",
        padding: 0,
        marginBottom: rem(0.5),
        fontSize: calc("1.275rem", "+", "0.3vw"),
    },
    sup: {
        fontSize: "0.75em",
        lineHeight: 0,
        textAlignVertical: "baseline",
        top: "-0.5em"
    },
    a: {
        color: "#0d6efd",
        // textDecoration:"underline"
    },
    container: {
        width: "100%",
        paddingRight: varCal('--bs-gutter-x', rem(0.75)),
        paddingLeft: varCal('--bs-gutter-x', rem(0.75)),
        marginRight: "auto",
        marginLeft: "auto",
        maxWidth: 540
    },
    container_fluid: {
        width: "100%",
        paddingRight: varCal('--bs-gutter-x', rem(0.75)),
        paddingLeft: varCal('--bs-gutter-x', rem(0.75)),
        marginRight: "auto",
        marginLeft: "auto",
        maxWidth: 540
    },
    container_lg: {
        width: "100%",
        paddingRight: varCal('--bs-gutter-x', rem(0.75)),
        paddingLeft: varCal('--bs-gutter-x', rem(0.75)),
        marginRight: "auto",
        marginLeft: "auto",
        maxWidth: 540
    },
    container_md: {
        width: "100%",
        paddingRight: varCal('--bs-gutter-x', rem(0.75)),
        paddingLeft: varCal('--bs-gutter-x', rem(0.75)),
        marginRight: "auto",
        marginLeft: "auto",
        maxWidth: 540
    },
    container_sm: {
        width: "100%",
        paddingRight: varCal('--bs-gutter-x', rem(0.75)),
        paddingLeft: varCal('--bs-gutter-x', rem(0.75)),
        marginRight: "auto",
        marginLeft: "auto",
        maxWidth: 540
    },
    container_xl: {
        width: "100%",
        paddingRight: varCal('--bs-gutter-x', rem(0.75)),
        paddingLeft: varCal('--bs-gutter-x', rem(0.75)),
        marginRight: "auto",
        marginLeft: "auto",
        maxWidth: 540
    },
    container_xxl: {
        width: "100%",
        paddingRight: varCal('--bs-gutter-x', rem(0.75)),
        paddingLeft: varCal('--bs-gutter-x', rem(0.75)),
        marginRight: "auto",
        marginLeft: "auto",
        maxWidth: 540
    },
    row: {
        flexWrap: "wrap",
        flexDirection: "row",
        // maxWidth: "100%",
        // marginTop: calc(varCal('--bs-gutter-y'), '*', '1'),
        // marginRight: calc(varCal('--bs-gutter-x'), '*', '-0.5'),
        // marginLeft: calc(varCal('--bs-gutter-x'), '*', '-0.5')
    },
    col: {
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: "0%"
    },

    col_auto: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "auto"
    },
    col_1: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "8.33333333%"
    },
    col_2: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "16.66666667%"
    },
    col_3: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "25%"
    },
    col_4: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "33.33333333%"
    },
    col_5: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "41.66666667%"
    },
    col_6: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "50%"
    },
    col_7: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "58.33333333%"
    },
    col_8: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "66.66666667%"
    },
    col_9: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "75%"
    },
    col_10: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "83.33333333%"
    },
    col_11: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "91.66666667%"
    },
    col_12: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: "100%"
    },
    offset_1: {
        marginLeft: "8.33333333%"
    },
    offset_2: {
        marginLeft: "16.66666667%"
    },
    offset_3: {
        marginLeft: "25%"
    },
    offset_4: {
        marginLeft: "33.33333333%"
    },
    offset_5: {
        marginLeft: "41.66666667%"
    },
    offset_6: {
        marginLeft: "50%"
    },
    offset_7: {
        marginLeft: "58.33333333%"
    },
    offset_8: {
        marginLeft: "66.66666667%"
    },
    offset_9: {
        marginLeft: "75%"
    },
    offset_10: {
        marginLeft: "83.33333333%"
    },
    offset_11: {
        marginLeft: "91.66666667%"
    },
    // Badge
    badge: {
        paddingTop: "0.35em",
        paddingRight: rem(0.65),
        paddingBottom: rem(0.35),
        paddingLeft: rem(0.65),
        fontSize: rem(0.75),
        fontWeight: 700,
        lineHeight: 1,
        color: "#fff",
        textAlign: "center",
        whiteSpace: "nowrap",
        textAlignVertical: "baseline",
        borderTopLeftRadius: rem(0.25),
        borderTopRightRadius: rem(0.25),
        borderBottomRightRadius: rem(0.25),
        borderBottomLeftRadius: rem(0.25),
    },
    text_primary: {
        color: "#0d6efd"
    },
    text_secondary: {
        color: "#6c757d"
    },
    text_success: {
        color: "#198754"
    },
    text_info: {
        color: "#0dcaf0"
    },
    text_warning: {
        color: "#ffc107"
    },
    text_danger: {
        color: "#dc3545"
    },
    text_light: {
        color: "#f8f9fa"
    },
    text_dark: {
        color: "#212529"
    },
    text_white: {
        color: "#fff"
    },
    text_body: {
        color: "#212529"
    },
    text_muted: {
        color: "#6c757d"
    },
    text_black_50: {
        color: "rgba(0, 0, 0, 0.5)"
    },
    text_white_50: {
        color: "rgba(255, 255, 255, 0.5)"
    },
    text_reset: {
        color: "inherit"
    },
    bg_primary: {
        backgroundColor: "#0d6efd"
    },
    bg_secondary: {
        backgroundColor: "#6c757d"
    },
    bg_success: {
        backgroundColor: "#198754"
    },
    bg_info: {
        backgroundColor: "#0dcaf0"
    },
    bg_warning: {
        backgroundColor: "#ffc107"
    },
    bg_danger: {
        backgroundColor: "#dc3545"
    },
    bg_light: {
        backgroundColor: "#f8f9fa"
    },
    bg_dark: {
        backgroundColor: "#212529"
    },
    bg_body: {
        backgroundColor: "#fff"
    },
    bg_white: {
        backgroundColor: "#fff"
    },
    bg_transparent: {
        backgroundColor: "transparent"
    },
    card_img: {
        width: "100%",
        height: null,
        borderTopLeftRadius: calc("0.25rem", "-", "1")
    },
    card_img_bottom: {
        width: "100%",
        borderTopLeftRadius: calc("0.25rem", "-", "1")
    },
    card_img_top: {
        width: "100%",
        borderTopLeftRadius: calc("0.25rem", "-", "1")
    },
    card_body: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: "auto",
        paddingTop: rem(1),
        paddingRight: rem(1),
        paddingBottom: rem(1),
        paddingLeft: rem(1)
    },
    card_title: {
        marginBottom: rem(0.5)
    },
    card_subtitle: {
        marginTop: rem(-0.25),
        marginBottom: 0
    },
    card_text: {
        marginBottom: 0
    },
}
const runMedia = () => {
    // 576px
    if (width > root['-breakpointSm']) {
        // container
        console.log("media working")
        style.container.maxWidth = 540;
        style.container_sm.maxWidth = 540;

        // Col
        style['col-sm'] = {
            flexGrow: 1,
            flexShrink: 0,
            flexBasis: "0%"
        }
        // Col-1
        appendToStyle(col_sm);
    }
    // 768px
    if (width > root['-breakpointMd']) {
        // container
        style.container.maxWidth = 720;
        style.container_sm.maxWidth = 720;
        style.container_md.maxWidth = 720;

        // Col
        style['col-md'] = {
            flexGrow: 1,
            flexShrink: 0,
            flexBasis: "0%"
        }
        appendToStyle(col_md)
    }
    // 992px
    if (width > root['-breakpointLg']) {
        // container
        style.container.maxWidth = 960;
        style.container_sm.maxWidth = 960;
        style.container_md.maxWidth = 960;
        style.container_lg.maxWidth = 960;

        // Col
        style['col-lg'] = {
            flexGrow: 1,
            flexShrink: 0,
            flexBasis: "0%"
        }
        appendToStyle(col_lg)
    }

    // 1200px
    if (width > root['-breakpointXl']) {
        // h1
        style.h1['fontSize'] = rem(2.5);
        style.h2['fontSize'] = rem(2);
        style.h3['fontSize'] = rem(1.75);
        style.h4['fontSize'] = rem(1.5);
        style.h5['fontSize'] = rem(1.25);

        // container
        style.container.maxWidth = 1140;
        style.container_sm.maxWidth = 1140;
        style.container_md.maxWidth = 1140;
        style.container_lg.maxWidth = 1140;
        style.container_xl.maxWidth = 1140;

        // Col
        style['col-xl'] = {
            flexGrow: 1,
            flexShrink: 0,
            flexBasis: "0%"
        }
        appendToStyle(col_xl)

    }
    // 1400px
    if (width > root['-breakpointXXl']) {
        // Container
        const maxWidth = 1320;
        style.container.maxWidth = maxWidth;
        style.container_sm.maxWidth = maxWidth;
        style.container_md.maxWidth = maxWidth;
        style.container_lg.maxWidth = maxWidth;
        style.container_xl.maxWidth = maxWidth;
        style.container_xxl.maxWidth = maxWidth;


        // Col
        style['col-xxl'] = {
            flexGrow: 1,
            flexShrink: 0,
            flexBasis: "0%"
        }
        appendToStyle(col_xxl)
    }
}
runMedia()

export default deepmerge(style, custom);