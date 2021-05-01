import styled from 'styled-components';

export const Loading = styled.div`
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const Owner = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
        color: #7159c1;
        font-size: 16px;
        text-decoration: none;
    }

    img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-top: 20px;
    }

    h1 {
        font-size: 24px;
        margin-top: 20px;
    }

    p {
        line-height: 1.5em;
        margin-top: 5px;
        font-size: 14px;
        color: #666;
        max-width: 400px;
        text-align: center;
    }
`

export const IssueList = styled.ul`
    padding: 30px;
    margin-top: 30px;
    list-style: none;

    li {
        display: flex;
        padding: 15px 10px;
        border: 1px solid #7159c1;
        border-radius: 4px;

        & + li {
            margin-top: 10px;
        }

        img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: 2px solid #7159c1;
        }

        div {
            flex: 1;
            margin-left:  15px;

            strong {
                font-size: 16px;

                a {
                    text-decoration: none;
                    color:  #333;

                    &:hover {
                        color: #7159c1;
                    }
                }
            }

            span {
                background-color: #333;
                color: #eee;
                height: 20px;
                border-radius: 2px;
                font-size: 10px;
                font-weight: 500;
                margin-left: 10px;
                padding: 2px 4px;
            }

            p {
                margin-top: 5px;
                font-size: 12px;
                color: #999;
            }
        }
    }

`