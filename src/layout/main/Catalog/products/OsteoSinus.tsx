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
							<S.Text>
								<div>The TURBOdrill® drill is an innovation of the IDI company – IMPLANTS DIFFUSION
									INTERNATIONAL. It offers a new drilling approach thanks to its secure bladed
									stopper.
								</div>
								<div>Control each drilling parameters : safety, irrigation, bone temperature & speed.
								</div>
								<div>Cylindro-tapered drill, available in 4 lengths : 8, 10, 12 and 15 mm and 3
									diameters : 3,6, 4,2 and 5,2 mm.
								</div>
								<S.Title2>BENEFITS</S.Title2>
								<div> The TURBOdrill® is a cylindro-tapered drill with 4 serrated blades. It has a
									hollowed out stopper with blades acting as a turbine and leading the irrigation
									liquid along the blades till the bone socket. This intense irrigation phenomenon
									optimizes the cooling of the drill and thus of the operating site. The TURBOdrill®
									may be used up to 1 200 rpm with irrigation without bone heating up.
								</div>
							</S.Text>
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
								<S.Title2>CHARACTERISTICS</S.Title2>
								<div>Osteosinus Kit</div>
								<div>The TURBOdrill® drill is an innovation of the IDI company – IMPLANTS DIFFUSION
									INTERNATIONAL. It offers a new drilling approach thanks to its secure bladed
									stopper.
								</div>
								<S.Title2>TABLE OF LENGTHS AND DIAMETERS</S.Title2>
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
								<S.Title2>CHARACTERISTICS</S.Title2>
								<div>Osteosinus Kit</div>
								<div>The TURBOdrill® drill is an innovation of the IDI company – IMPLANTS DIFFUSION
									INTERNATIONAL. It offers a new drilling approach thanks to its secure bladed
									stopper.
								</div>
								<S.Title2>TABLE OF LENGTHS AND DIAMETERS</S.Title2>
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
								<S.Title2>CHARACTERISTICS</S.Title2>
								<div>Osteosinus Kit</div>
								<div>The TURBOdrill® drill is an innovation of the IDI company – IMPLANTS DIFFUSION
									INTERNATIONAL. It offers a new drilling approach thanks to its secure bladed
									stopper.
								</div>
								<S.Title2>TABLE OF LENGTHS AND DIAMETERS</S.Title2>
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
								<S.Title2>CHARACTERISTICS</S.Title2>
								<div>Osteosinus Kit</div>
								<div>The TURBOdrill® drill is an innovation of the IDI company – IMPLANTS DIFFUSION
									INTERNATIONAL. It offers a new drilling approach thanks to its secure bladed
									stopper.
								</div>
								<S.Title2>TABLE OF LENGTHS AND DIAMETERS</S.Title2>
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
								<S.Title2>CHARACTERISTICS</S.Title2>
								<div>Osteosinus Kit</div>
								<div>The TURBOdrill® drill is an innovation of the IDI company – IMPLANTS DIFFUSION
									INTERNATIONAL. It offers a new drilling approach thanks to its secure bladed
									stopper.
								</div>
								<S.Title2>BENEFITS</S.Title2>
								<div></div>
							</S.Text>
						</S.TextBox>
					</S.BoxItems>
				</S.DescriptionBox>
			</Container>
		</S.ProductBox>
	);
}


