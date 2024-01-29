import React from 'react';
import {Container} from "../../../../components/Container";
import p1 from '../../../../images/pictures/Osteosinus-Big.png'
import p0 from '../../../../images/pictures/osteosinus/p1.png'
import p2 from '../../../../images/pictures/osteosinus/p2.png'
import p3 from '../../../../images/pictures/osteosinus/p3.png'
import p4 from '../../../../images/pictures/osteosinus/p4.png'
import p5 from '../../../../images/pictures/osteosinus/p5.png'
import p6 from '../../../../images/pictures/osteosinus/p6.png'
import t1 from '../../../../images/pictures/osteosinus/t2.png'
import {S} from './_ProductStyles'
import {Button} from "../../../../components/Button";
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {font} from "../../../../style/Common";




export const OsteoSinus = () => {
	const {t} = useTranslation();
	return (
		<S.ProductBox>
			<S.BigImg src={p1} alt={'ID CAM'}/>
			<Container>
				<S.DescriptionBox>
					<S.BoxItems>
						<S.SmallImgBox>
							<S.Title3>OSTEOSINUS®</S.Title3>
							<S.SmallImg src={p0} alt={'implant'}/>
							<Button>
								<a href={'/IDI_Osteosinus.pdf'} target="_blank" rel="noreferrer">
									{t('title3')}
								</a>
							</Button>
						</S.SmallImgBox>
						<S.TextBox>
							<Text>
								<div>{t("OS1/1")}</div>
								<div>{t("OS1/2")}</div>
								<div>{t("OS1/3")}</div>
								<S.Title2>{t("BENEFITS")}</S.Title2>
								<div>{t("OS1/4")}</div>
								<div>{t("OS1/5")}</div>
							</Text>
						</S.TextBox>
					</S.BoxItems>
				</S.DescriptionBox>
			</Container>
			<Container>
				<S.DescriptionBox>
					<S.BoxItems>
						<S.SmallImgBox>
							<S.Title3>RECTISINUS®</S.Title3>
							<S.SmallImg src={p2} alt={'implant'}/>
							<Button>
								<a href={'/IDI_Osteosinus.pdf'} target="_blank" rel="noreferrer">
									{t('title3')}
								</a>
							</Button>
						</S.SmallImgBox>
						<S.TextBox>
							<S.Text>
								<S.Title2>{t("SK-title2")}</S.Title2>
								<div>{t("OS2/1")}</div>
								<div>{t("OS2/2")}</div>
								<S.Title2>{t("tableTitle")}</S.Title2>
								<S.TableBox>
									<S.TableBoxTitles>
										<S.TableBoxTitle>Length</S.TableBoxTitle>
										<S.TableBoxTitle>Color</S.TableBoxTitle>
										<S.TableBoxTitle>Diameter 3</S.TableBoxTitle>
									</S.TableBoxTitles>
									<S.TablImgBox>
										<S.TablImg src={t1} alt={''}/>
									</S.TablImgBox>
								</S.TableBox>
								<div>{t("OSall")}</div>
							</S.Text>
						</S.TextBox>
					</S.BoxItems>
				</S.DescriptionBox>
			</Container>
			<Container>
				<S.DescriptionBox>
					<S.BoxItems>
						<S.SmallImgBox>
							<S.Title3>ANGULOSINUS®</S.Title3>
							<S.SmallImg src={p3} alt={'implant'}/>
							<Button>
								<a href={'/IDI_Osteosinus.pdf'} target="_blank" rel="noreferrer">
									{t('title3')}
								</a>
							</Button>
						</S.SmallImgBox>
						<S.TextBox>
							<S.Text>
								<S.Title2>{t("SK-title2")}</S.Title2>
								<div>{t("OS3/1")}</div>
								<div>{t("OS3/2")}</div>
								<S.Title2>{t("tableTitle")}</S.Title2>
								<S.TableBox>
									<S.TableBoxTitles>
										<S.TableBoxTitle>Length</S.TableBoxTitle>
										<S.TableBoxTitle>Color</S.TableBoxTitle>
										<S.TableBoxTitle>Diameter 3</S.TableBoxTitle>
									</S.TableBoxTitles>
									<S.TablImgBox>
										<S.TablImg src={t1} alt={''}/>
									</S.TablImgBox>
								</S.TableBox>
								<div>{t("OSall")}</div>
							</S.Text>
						</S.TextBox>
					</S.BoxItems>
				</S.DescriptionBox>
			</Container>
			<Container>
				<S.DescriptionBox>
					<S.BoxItems>
						<S.SmallImgBox>
							<S.Title3>FORSINUS®</S.Title3>
							<S.SmallImg src={p4} alt={'implant'}/>
							<Button>
								<a href={'/IDI_Osteosinus.pdf'} target="_blank" rel="noreferrer">
									{t('title3')}
								</a>
							</Button>
						</S.SmallImgBox>
						<S.TextBox>
							<S.Text>
								<S.Title2>{t("SK-title2")}</S.Title2>
								<div>{t("OS4")}</div>
								<S.Title2>{t("tableTitle")}</S.Title2>
								<S.TableBox>
									<S.TableBoxTitles>
										<S.TableBoxTitle>Length</S.TableBoxTitle>
										<S.TableBoxTitle>Color</S.TableBoxTitle>
										<S.TableBoxTitle>Diameter 3</S.TableBoxTitle>
									</S.TableBoxTitles>
									<S.TablImgBox>
										<S.TablImg src={t1} alt={''}/>
									</S.TablImgBox>
								</S.TableBox>
								<div>{t("OSall")}</div>
							</S.Text>
						</S.TextBox>
					</S.BoxItems>
				</S.DescriptionBox>
			</Container>
			<Container>
				<S.DescriptionBox>
					<S.BoxItems>
						<S.SmallImgBox>
							<S.Title3>TREPANOSINUS®</S.Title3>
							<S.SmallImg src={p5} alt={'implant'}/>
							<Button>
								<a href={'/IDI_Osteosinus.pdf'} target="_blank" rel="noreferrer">
									{t('title3')}
								</a>
							</Button>
						</S.SmallImgBox>
						<S.TextBox>
							<S.Text>
								<S.Title2>{t("SK-title2")}</S.Title2>
								<div>{t("OS4")}</div>
								<S.Title2>{t("tableTitle")}</S.Title2>
								<S.TableBox>
									<S.TableBoxTitles>
										<S.TableBoxTitle>Length</S.TableBoxTitle>
										<S.TableBoxTitle>Color</S.TableBoxTitle>
										<S.TableBoxTitle>Diameter 3</S.TableBoxTitle>
									</S.TableBoxTitles>
									<S.TablImgBox>
										<S.TablImg src={t1} alt={''}/>
									</S.TablImgBox>
								</S.TableBox>
								<div>{t("OSall")}</div>
							</S.Text>
						</S.TextBox>
					</S.BoxItems>
				</S.DescriptionBox>
			</Container>
			<Container>
				<S.DescriptionBox>
					<S.BoxItems>
						<S.SmallImgBox>
							<S.Title3>DISKOSINUS®</S.Title3>
							<S.SmallImg src={p6} alt={'implant'}/>
							<Button>
								<a href={'/IDI_Osteosinus.pdf'} target="_blank" rel="noreferrer">
									{t('title3')}
								</a>
							</Button>
						</S.SmallImgBox>
						<S.TextBox>
							<S.Text>
								<S.Title2>{t("SK-title2")}</S.Title2>
								<div>{t("OS6/1")}</div>
								<S.Title2>{t("BENEFITS")}</S.Title2>
								<div>{t("OS6/2")}</div>
								<div>{t("OS6/3")}</div>
								<div></div>
							</S.Text>
						</S.TextBox>
					</S.BoxItems>
				</S.DescriptionBox>
			</Container>
		</S.ProductBox>
	);
}

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-top: 70px;
  text-align: start;
  line-height: 1.4;
  ${font({weight: 400, fmax: 24, fmin: 16})};
  @media (max-width: 900px) {
    padding-top: 5px;
  }
`
