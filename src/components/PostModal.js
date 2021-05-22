import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

const PostModal = (props) => {

    const [editorText, setEditorText] = useState("");

    const reset = (e) => {
        setEditorText("");
        props.handleClick(e);
    };

    return (
        <>
        {
            props.showModal === 'open' && 
        <Container>
            <Content>
                <Header>
                    <h2> Create a post </h2>
                    <button onClick={(event) => reset(event)}> <img src="/images/close-icon.svg" /></button>
                </Header>

                <SharedContent>
                    <UserInfo>
                        <img src="/images/user.svg" alt="" />
                        <span> Name </span>
                    </UserInfo>

                    <Editor>
                        <textarea value={editorText}
                        onChange={(e) => setEditorText(e.target.value)}
                        placeholder="What do you want to talk about?"
                        autoFocus={true}
                        ></textarea>
                    </Editor>
                </SharedContent>

                <SharedCreation>
                    <AttachAssets>
                        <AssetButton>
                            <img src="/images/share-icon.svg" alt="" />
                        </AssetButton>
                        <AssetButton>
                            <img src="/images/video.jpeg" alt="" />
                        </AssetButton>
                    </AttachAssets>

                    <ShareComment>
                        <AssetButton>
                                <img src="/images/comment-icon.png" alt="" />
                                Anyone
                        </AssetButton>
                    </ShareComment>

                    <PostButton>
                        Post
                    </PostButton>

                </SharedCreation>
            </Content>
        </Container>
        }
        </>
    )
}

export default PostModal

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    color: black;
    background-color: rgba(0, 0, 0, 0.8);
`

const Content =styled.div`
    width: 100%;
    max-width: 52px;
    background-color: white;
    max-height: 90%;
    overflow: initial;
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    top: 32px;
    margin: 0 auto;
`

const Header = styled.div`
    display: block;
    padding: 16px 2px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    font-size: 16px;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button{
        height: 40px;
        width: 40px;
        min-width: auto;
        color: rgba(0, 0, 0, 0.15);
    }

    svg,img{
        pointer-events: none;
    }
`

const SharedContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow-y: auto;
    vertical-align: baseline;
    background: transparent;
    padding: 8px 12px;
`

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 24px;

    svg, img{
        width: 48px;
        height: 48px;
        background-clip: content-box;
        border: 2px solid transparent;
        border-radius: 50%;
    }

    span{
        font-weight: 600;
        font-size: 16px;
        line-height: 1.5;
        margin-left: 5px; 
    }
`

const SharedCreation = styled.div`
    display: flex;
    justify-content: space-space-between;
    padding: 12px 24px 12px 16px;
`

const AssetButton = styled.button`
    display: flex;
    align-items: center;
    height: 40px;
    min-width: auto;
    color: rgba(0, 0, 0, 0.5);
`

const AttachAssets = styled.div`
    align-items: center;
    display: flex;
    padding-right: 8px;

    ${AssetButton}{
        width: 40px;
    }
`

const ShareComment = styled.div`
    padding-left: 8px;
    margin-right: auto;
    border-left: 1px solid rgba(0, 0, 0, 0.15);
    ${AssetButton}{
        svg{
            margin-right: 5px;
        }
    }
`

const PostButton = styled.button`
    min-width: 60px;
    border-radius: 20px;
    padding-left: 16px;
    padding-right: 16px;
    background: #0a66c2;
    color: white;

    &:hover{
        background: #004182;
    }
`

const Editor = styled.div`
    padding: 12px 24px;
    textarea{
        width: 100%;
        min-width: 100px;
        resize: none;
    }

    input{
        width: 100%;
        height: 35px;
        font-size: 16px;
        margin-bottom: 20px;
    }
`