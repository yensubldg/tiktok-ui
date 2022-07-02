import bindClass from '~/utils/bindClass';
import styles from './AccountItem.module.scss';

const cx = bindClass(styles);

function AccountItem() {
	return <div className={cx('wrapper')}></div>;
}

export default AccountItem;
