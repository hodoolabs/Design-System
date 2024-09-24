import { HTMLInputTypeAttribute, ReactNode, RefObject } from 'react';
interface InputProps {
    type?: HTMLInputTypeAttribute;
    size?: 'lg' | 'sm';
    value: string;
    error?: string;
    label?: ReactNode;
    maxLength?: number;
    placeholder?: string;
    helper?: ReactNode;
    disabled?: boolean;
    required?: boolean;
    className?: string;
    /**
     * @see autoComplete 자세한 사용법은 https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
     */
    autoComplete?: JSX.IntrinsicElements['input']['autoComplete'];
    ref?: RefObject<HTMLInputElement>;
    onBlur?: (value: string) => void;
    onChange?: (value: string) => void;
    onError?: (error: string) => void;
    onEnter?: () => void;
}
declare const Input: ({ type, size, autoComplete, label, value, error, maxLength, placeholder, helper, disabled, required, ref, className, onBlur, onChange, onError, onEnter, }: InputProps) => import("react/jsx-runtime").JSX.Element;
export default Input;
