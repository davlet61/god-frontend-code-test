import { NextComponentType } from 'next';
import dynamic from 'next/dynamic';

const NoSsr: NextComponentType = ({ children }) => <>{children}</>;

export default dynamic(() => Promise.resolve(NoSsr), { ssr: false });
