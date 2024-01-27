import React from "react";
import { St } from "./_CatalogStyles";


type WorkPropsType = {
    image: string
    title: string
    text: string
    alt: string
}

export const Item: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (  
        <St.Item>
            <St.ImgBox>
                <St.Image src={props.image} alt={props.alt}/>
            </St.ImgBox>
            {/*<S.ItemTitle/>*/}
                <St.Button>{props.title}</St.Button>
                {/*<S.Text>{props.text}</S.Text>*/}
                {/*<S.Button>Demo</S.Button>*/}

        </St.Item>
    );
}

