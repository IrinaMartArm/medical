import React from "react";
import { S } from "./_CatalogStyles";


type WorkPropsType = {
    image: string
    title: string
    text: string
    alt: string
}

export const Item: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (  
        <S.Item>
            <S.ImgBox>
                <S.Image src={props.image} alt={props.alt}/>
            </S.ImgBox>
            {/*<S.ItemTitle/>*/}
                <S.Button>{props.title}</S.Button>
                {/*<S.Text>{props.text}</S.Text>*/}
                {/*<S.Button>Demo</S.Button>*/}

        </S.Item>
    );
}

