import React from "react";
import { MAIN_URL } from "./constants"
import AssetText from "../components/AssetText";
import AssetHeading from "../components/AssetHeading";
import Asset from "../components/Asset";
import AssetLink from "../components/AssetLink";

export const request = async (url: string,query? : string) => {
    try {
        const result = await fetch(`${MAIN_URL}${url}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(query)
        })
        const data = await result.json();

        return data;
    } catch(e) {
        console.log(e)
    }
}




export const sortByDate = (arr: Array<any>) => {
    return arr.sort((a,b) => new Date(a.date) - new Date(b.date))
}



export const getLocalDateString = (
    date: string | Date, 
    { 
        month = "numeric", 
        day = "numeric", 
        year = "numeric" 
    } : {
        month?: "numeric" | "2-digit" | "long" | "short"
        day?: "numeric" | "2-digit",
        year? : "numeric" | "2-digit" 
    }
    ): string => {
    return new Date(date).toLocaleDateString("ru-RU", {
        month,
        day,
        year,
      })
}

type Node ={
    [key:string]: any
}

type Render = {
    node: Node
}

export const renderNode = (node: Render, i: number | string): any=> {

    const {nodeType, data, value, content}: Node = node
    const key = `${nodeType}${i}`

    switch(nodeType) {
        case 'paragraph':
            return React.createElement('p', {key:key}, content.map(renderNode))
        case 'text':
            return React.createElement(AssetText, {key:key, value:value} )
        case 'heading-3':
            return React.createElement(AssetHeading, {key:key, content: content})
        case 'embedded-asset-block':
            return React.createElement('div',{key:key},'hello')
            // return React.createElement(Asset, {key:key, id: data.target.sys.id})
        case 'hyperlink':
            return React.createElement(AssetLink, {key: key, uri: data.uri, content:content})
        default:
            break;
    }

    return Array.isArray(content) ? content.map(renderNode) : null;
}

export const jsonToText = ({content}: {content: any[]}) => {
    return content.map(renderNode)
}


export const getAsset = async (assetId: any) => {
    try {
        const url = ''

        const result = await fetch(url)
        const data = await result.json()

        const link = data?.fields?.file?.url

        return link ? `https:${link}` : null ;
    }catch(e){
        console.log(e)
    }
}
