'use client';

import { ReactNode, memo, useEffect, useRef, useState } from 'react';
import { cn } from '../../utils/style';
import VectorDarkSvg from './images/VectorDarkSvg';
import VectorWhiteSVG from './images/VectorWhiteSvg';
import { ArrowStyle, DescriptionStyle, TooltipBoxStyle, TooltipStyle } from './style';
import ReactDOM from 'react-dom';

interface TooltipProps {
	color: 'dark' | 'white';
	title: string;
	description?: ReactNode;
	isShowArrow: boolean;
	children: ReactNode;
	position: 'top' | 'right' | 'left' | 'bottom';
}

const Tooltip = ({ color, title, description, isShowArrow, children, position }: TooltipProps) => {
	const [isHovered, setIsHovered] = useState(false);
	const [tooltipElement, setTooltipElement] = useState<HTMLDivElement | null>(null);
	const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
	const targetRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = document.createElement('div');
		document.body.appendChild(el);
		setTooltipElement(el);

		return () => {
			document.body.removeChild(el);
		};
	}, []);

	useEffect(() => {
		if (isHovered && targetRef.current) {
			const targetRect = targetRef.current.getBoundingClientRect();

			setTooltipPosition({
				top: targetRect.top + window.scrollY - (targetRect.height * 2) / 3,
				left: targetRect.left + window.scrollX + targetRect.width / 2,
			});
		}
	}, [isHovered]);

	return (
		<div
			className='relative inline-block'
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			ref={targetRef}
		>
			<div className='peer'>{children}</div>
			{isHovered &&
				tooltipElement &&
				ReactDOM.createPortal(
					<div
						className={cn(TooltipBoxStyle({ position, isShowArrow: isShowArrow ? position : null }))}
						style={{ top: `${tooltipPosition.top}px`, left: `${tooltipPosition.left}px` }}
					>
						<div className={`${cn(TooltipStyle({ color }))}`}>
							<p>{title}</p>
							<div className={cn(DescriptionStyle({ color }))}>{description}</div>
							{isShowArrow && (
								<div className={cn(ArrowStyle({ position }))}>
									{color === 'white' ? <VectorWhiteSVG /> : <VectorDarkSvg />}
								</div>
							)}
						</div>
					</div>,
					tooltipElement
				)}
		</div>
	);
};

export default memo(
	Tooltip,
	(prev: TooltipProps, next: TooltipProps) =>
		prev.color === next.color &&
		prev.title === next.title &&
		prev.description === next.description &&
		prev.isShowArrow === next.isShowArrow &&
		prev.children === next.children &&
		prev.position === next.position
);
