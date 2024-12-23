// src\types\components.ts
import { ComponentType, FC, ReactNode, SVGProps } from 'react';

export interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

export type AnyProps = Record<string, unknown>;

export type LazyComponent = ComponentType<AnyProps> | FC<AnyProps>;

export type LazyComponentModule = Promise<{
  default: LazyComponent;
}>;

export type LazyImport = () => LazyComponentModule;

export interface RouteDefinition {
  public: {
    HOME: string;
    ABOUT: string;
    LOGIN: string;
    REGISTER: string;
    FORGOT_PASSWORD: string;
    RESET_PASSWORD: string;
  };
  protected: {
    PROFILE: string;
    LEARN: string;
    ALGORITHMS: string;
    DATA_STRUCTURES: string;
    PRACTICE: string;
  };
  learning: {
    WHAT_IS_PROGRAMMING: string;
    VARIABLES: string;
    CONTROL_STRUCTURES: string;
    ARRAYS: string;
    LINKED_LISTS: string;
    STACKS_QUEUES: string;
    BUBBLE_SORT: string;
    SELECTION_SORT: string;
    QUICK_SORT: string;
  };
}