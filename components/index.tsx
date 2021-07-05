import React from 'react';
import { StyleProp, ViewStyle, ImageStyle, TextStyle, View as DefaultView, Text as DefaultText, Image as DefaultImage, ImageBackground as DefaultImageBackground, FlatList as DefaultFlatList, ScrollView as DefaultScrollView, Linking } from "react-native";
import Bootstrap from "../bootstrap";

interface customProps {
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle | ImageStyle | TextStyle> | Array<StyleProp<ViewStyle | ImageStyle | TextStyle>>;
    className?: string;
    [x: string]: any;
}
interface imageProps {
    children?: React.ReactNode;
    source: any;
    style?: StyleProp<ImageStyle> | Array<StyleProp<ImageStyle>>;
    className?: string;
    [x: string]: any;
}

export const View = ({ children, className, style, ...rest }: customProps) => {
    return (
        <DefaultView style={[styling(className), Array.isArray(style) ? [...style] : style]} {...rest}>{children}</DefaultView>
    );
}
export const Text = ({ children, className, style, ...rest }: customProps) => {
    return (
        <DefaultText style={[styling(className), Array.isArray(style) ? [...style] : style]} {...rest}>{children}</DefaultText>

    );
}

export const Image = ({ className, style, source, ...rest }: imageProps) => {
    return (
        <DefaultImage style={[styling(className), Array.isArray(style) ? [...style] : style]} source={source} {...rest} />
    );
}
export const ImageBackground = ({ children, className, style, source, ...rest }: imageProps) => {
    return (
        <DefaultImageBackground source={source} style={[styling(className), Array.isArray(style) ? [...style] : style]} {...rest}>{children}</DefaultImageBackground>
    );
}
export const FlatList = ({ children, className, data, renderItem, style, keyExtractor, ...rest }: customProps) => {
    return (
        <DefaultFlatList style={[styling(className), Array.isArray(style) ? [...style] : style]} {...rest} data={data} renderItem={renderItem} keyExtractor={keyExtractor}>{children}</DefaultFlatList>

    );
}
export const ScrollView = ({ children, className, style, ...rest }: customProps) => {
    return (
        <DefaultScrollView style={[styling(className), Array.isArray(style) ? [...style] : style]} {...rest} >{children}</DefaultScrollView>
    );
}

const styling = (className: string) => {
    const classArray = className ? className.replaceAll('-', '_').split(' ') : [];
    const styleArray = []
    for (let c of classArray) {
        styleArray.push(Bootstrap[c])
    }
    return styleArray;
}