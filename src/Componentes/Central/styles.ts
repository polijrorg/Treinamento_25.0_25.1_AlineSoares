import styled from 'styled-components';

export const Centro = styled.div`
    display: flex;
    width: 50vw;
    height: 100%;
    padding: 32px;
    flex-direction: column;
    align-items: center;
    gap: 46px;
    background: var(--Slate-1, #151718);
    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const BarradePesquisa = styled.div`
    display: flex;
    padding: 8px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 8px;
    background: var(--Slate-8, #4c5155);
`;

export const TexBdP = styled.h1`
    color: var(--Slate-12, #ecedee);
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;
    /* Body/Body Normal */
    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 171.429% */
    letter-spacing: 0.5px;
`;

export const ImgBdP = styled.img`
    width: 24px;
    height: 24px;
`;

export const Box01 = styled.div`
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 55px;
    align-self: stretch;
    border-radius: 16px;
    background: var(--Slate-8, #4c5155);
`;

export const TexBox01 = styled.h1`
    width: 153px;
    color: var(--Slate-12, #ecedee);
    text-align: center;
    /* Subtitle/Normal */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const CaixaDaBarra = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`;

export const Barra = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const Icon01 = styled.img`
    width: 24px;
    height: 24px;
`;

export const Icon02 = styled.img`
    width: 24px;
    height: 24px;
`;

export const Icon03 = styled.img`
    width: 20px;
    height: 20px;
`;

export const Icon04 = styled.img`
    width: 24px;
    height: 24px;
`;

export const Icon05 = styled.img`
    width: 24px;
    height: 24px;
`;

export const Icon06 = styled.img`
    width: 24px;
    height: 24px;
`;

export const Linha17 = styled.div`
    width: 100%;
    height: 1px;
    background: var(--Slate-8, #4c5155);
`;

export const Box02 = styled.div`
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    align-self: stretch;
    border-radius: 16px;
    background: var(--Slate-3, #202425);
`;

export const BoxDoUsuario = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
`;

export const CaixaDoUsuario = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const CaixaFotoUsuario = styled.div`
display: flex;
padding: 8px;
align-items: center;
gap: 10px;
border-radius: 48px;
border: 4px solid var(--Institutional-Blue-Fade, #004C97);
Colors
Hex
Hex
Border colors
`;

export const MolduraFotoUsuario = styled.div`
    display: flex;
    width: 80px;
    height: 80px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 100px;
    background: #fff;
`;

export const FotoUsuario = styled.img`
flex: 1 0 0;
align-self: stretch;
border-radius: 100px;.
`;

export const CaixaDadosUsuario = styled.h1`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
`;

export const NomedoUsuario = styled.h1`
    color: var(--Slate-12, #ecedee);
    text-align: center;
    /* Subtitle/Bold */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const UserdoUsuario = styled.h1`
    color: var(--Slate-12, #ecedee);
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;
    /* Body/Body Normal */
    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 171.429% */
    letter-spacing: 0.5px;
`;

export const Icon07 = styled.img`
    width: 24px;
    height: 24px;
`;

export const PiuPiu = styled.h1`
    color: var(--Slate-12, #ecedee);
    text-align: center;
    font-family: Nunito;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const CaixaDeIcon = styled.div`
display: flex;
align-items: flex-start;
gap: 24px;8
`;

export const CaixaRepubli = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const ImgRepubli = styled.img`
    width: 24px;
    height: 24px;
`;

export const TextRepubli = styled.h1`
    color: var(--Slate-12, #ecedee);
    /* Subtitle/Normal */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const CaixaComent = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const ImgComent = styled.img`
    width: 24px;
    height: 24px;
`;

export const TextComent = styled.h1`
    color: var(--Slate-12, #ecedee);
    /* Subtitle/Normal */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const CaixaLike = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const ImgLike = styled.img`
    width: 24px;
    height: 24px;
`;

export const TextLike = styled.h1`
color: var(--Slate-12, #ECEDEE);
/* Subtitle/Normal */
font-family: Nunito;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;7
`;

export const Box03 = styled.div`
    width: 100px;
    height: 100px;
`;

export const Box04 = styled.div`
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    align-self: stretch;
    border-radius: 16px;
    background: #202425;
`;

export const PiuPiu2 = styled.h1`
    align-self: stretch;
    color: var(--Slate-12, #ecedee);
    /* Subtitle/Normal */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const CaixaDeIcon2 = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 24px;
`;

export const CaixaRepubli2 = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const ImgRepubli2 = styled.img`
    width: 24px;
    height: 24px;
`;

export const TextRepubli2 = styled.h1`
    color: #ecedee;
    /* Subtitle/Normal */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const CaixaComent2 = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const ImgComent2 = styled.img`
    width: 24px;
    height: 24px;
`;

export const TextComent2 = styled.h1`
    color: #ecedee;

    /* Subtitle/Normal */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const CaixaLike2 = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const ImgLike2 = styled.img`
    width: 24px;
    height: 24px;
`;

export const TextLike2 = styled.h1`
    color: #ecedee;

    /* Subtitle/Normal */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const Box05 = styled.div`
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    align-self: stretch;
    border-radius: 16px;
    background: #202425;
`;
