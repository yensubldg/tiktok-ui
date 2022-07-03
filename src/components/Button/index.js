import { Link } from 'react-router-dom';
import bindClass from '~/utils/bindClass';
import styles from './Button.module.scss';

const cx = bindClass(styles);

function Button({
	to,
	href,
	primary = false,
	outline = false,
	text = false,
	small = false,
	medium,
	large = false,
	disabled = false,
	children,
	onClick,
	...props
}) {
	let Comp = 'button';
	const _props = {
		onClick,
		...props,
	};

	if (disabled) {
		delete _props.onClick;
	}
	if (to) {
		_props.to = to;
		Comp = Link;
	} else if (href) {
		_props.href = href;
		Comp = 'a';
	}
	const classes = cx('wrapper', {
		primary,
		outline,
		text,
		small,
		large,
		disabled,
	});

	return (
		<Comp
			className={classes}
			{..._props}
		>
			<span>{children}</span>
		</Comp>
	);
}

export default Button;
