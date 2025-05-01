import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 320px;
    height: 1024px;
    padding: 32px 0px;
    flex-direction: column;
    align-items: center;
    gap: 240px;
    flex-shrink: 0;
    border-right: 1px solid var(--Slate-8, #4c5155);
    background: var(--Slate-2, #1a1d1e);
`;

export const DivBoton = styled.div`
    display: flex;
    height: 528px;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    flex-shrink: 0;
    align-self: stretch;
`;

export const DivLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

export const Chicken = styled.img`
    width: 48px;
    height: 48px;
`;

export const Texto = styled.h1`
    color: var(--Slate-12, #ecedee);
    font-family: Nunito;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 6px;
`;

export const BaixoLogo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
`;

export const PaginaInicial = styled.div`
    display: flex;
    height: 56px;
    padding-right: 16px;
    align-items: center;
    gap: 10px;
`;

export const InPI = styled.div`
    display: flex;
    width: 304px;
    padding: 0px 16px;
    align-items: center;
    gap: 10px;
    border-radius: 0px 80px 80px 0px;
    background: var(--Indigo-9, #3e63dd);
`;

export const TexPI = styled.h1`
    display: flex;
    width: 179px;
    height: 57px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    olor: var(--Slate-12, #ecedee);
    /* Subtitle/Bold */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const ImgPI = styled.img`
    width: 24px;
    height: 24px;
    flex-shrink: 0;
`;

export const Notificacao = styled.div`
    display: flex;
    height: 56px;
    padding-right: 16px;
    align-items: center;
    gap: 10px;
`;

export const InNot = styled.div`
    display: flex;
    width: 304px;
    padding: 0px 16px;
    align-items: center;
    gap: 10px;
`;

export const TexNot = styled.h1`
    display: flex;
    width: 179px;
    height: 57px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: var(--Slate-12, #ecedee);
    /* Subtitle/Bold */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const ImgNot = styled.img`
    width: 24px;
    height: 24px;
    flex-shrink: 0;
`;

export const Mensagem = styled.div`
    display: flex;
    height: 56px;
    padding-right: 16px;
    align-items: center;
    gap: 10px;
`;

export const InMen = styled.div`
    display: flex;
    width: 304px;
    padding: 0px 16px;
    align-items: center;
    gap: 10px;
`;

export const TexMen = styled.h1`
    display: flex;
    width: 179px;
    height: 57px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: var(--Slate-12, #ecedee);
    /* Subtitle/Bold */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const ImgMen = styled.img`
    width: 24px;
    height: 24px;
    flex-shrink: 0;
`;

export const Salves = styled.div`
    display: flex;
    height: 56px;
    padding-right: 16px;
    align-items: center;
    gap: 10px;
`;

export const InSal = styled.div`
    display: flex;
    width: 304px;
    padding: 0px 16px;
    align-items: center;
    gap: 10px;
`;

export const ImgSal = styled.img`
    width: 24px;
    height: 24px;
    flex-shrink: 0;
`;

export const TexSal = styled.h1`
    display: flex;
    width: 179px;
    height: 57px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: var(--Slate-12, #ecedee);
    /* Subtitle/Bold */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const Perfil = styled.div`
    display: flex;
    height: 56px;
    padding-right: 16px;
    align-items: center;
    gap: 10px;
`;

export const InPer = styled.div`
    display: flex;
    width: 304px;
    padding: 0px 16px;
    align-items: center;
    gap: 10px;
`;

export const ImgPer = styled.img`
    width: 24px;
    height: 24px;
    flex-shrink: 0;
`;

export const TexPer = styled.h1`
    display: flex;
    width: 179px;
    height: 57px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: var(--Slate-12, #ecedee);
    /* Subtitle/Bold */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const Configuracao = styled.div`
    display: flex;
    height: 56px;
    padding-right: 16px;
    align-items: center;
    gap: 10px;
`;

export const InConf = styled.div`
    display: flex;
    width: 304px;
    padding: 0px 16px;
    align-items: center;
    gap: 10px;
`;

export const ImgConf = styled.img`
    width: 24px;
    height: 24px;
    flex-shrink: 0;
`;

export const TexConf = styled.h1`
    display: flex;
    width: 179px;
    height: 57px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: var(--Slate-12, #ecedee);
    /* Subtitle/Bold */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const OneIcon = styled.div`
    display: flex;
    width: 64px;
    height: 64px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    align-items: center;
`;

export const ImgOneIcon = styled.img`
    flex: 1 0 0;
    align-self: stretch;
    border-radius: 100px;
`;

export const twoIcon = styled.img`
    width: 64px;
    height: 64px;
    flex-shrink: 0;
    align-items: center;
`;
