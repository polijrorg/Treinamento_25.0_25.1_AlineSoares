import React from 'react';
import * as S from './styles';

const SideBar = () => {
    return (
        <S.Container>
            <S.DivBoton>
                <S.DivLogo>
                    <S.Chicken src="assets/images/chick-svgrepo-com 1.png" />
                    <S.Texto>PIUPIUWER</S.Texto>
                </S.DivLogo>
                <S.BaixoLogo>
                    <S.PaginaInicial>
                        <S.InPI>
                            <S.ImgPI src="assets/images/bx_home.png" />
                            <S.TexPI>Página Inicial</S.TexPI>
                        </S.InPI>
                    </S.PaginaInicial>
                    <S.Notificacao>
                        <S.InNot>
                            <S.ImgNot src="assets/images/ic_outline-notifications.png" />
                            <S.TexNot>Notificações</S.TexNot>
                        </S.InNot>
                    </S.Notificacao>
                    <S.Mensagem>
                        <S.InMen>
                            <S.ImgMen src="assets/images/jam_messages-alt.png" />
                            <S.TexMen>Mensagens</S.TexMen>
                        </S.InMen>
                    </S.Mensagem>
                    <S.Salves>
                        <S.InSal>
                            <S.ImgSal src="assets/images/Cloud_Check.png" />
                            <S.TexSal>Salvos</S.TexSal>
                        </S.InSal>
                    </S.Salves>
                    <S.Perfil>
                        <S.InPer>
                            <S.ImgPer src="assets/images/pajamas_profile.png" />
                            <S.TexPer>Perfil</S.TexPer>
                        </S.InPer>
                    </S.Perfil>
                    <S.Configuracao>
                        <S.InConf>
                            <S.ImgConf src="assets/images/akar-icons_gear.svg" />
                            <S.TexConf>Configurações</S.TexConf>
                        </S.InConf>
                    </S.Configuracao>
                </S.BaixoLogo>
            </S.DivBoton>
            <S.OneIcon>
                <S.ImgOneIcon src="assets/images/quadrados 1.png" />
                <S.twoIcon src="assets/images/Log_Out.png" />
            </S.OneIcon>
        </S.Container>
    );
};
export default SideBar;
