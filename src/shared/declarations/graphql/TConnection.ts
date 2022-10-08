type TNode<T> = {
  node: T;
};

type TConnection<T> = {
  edges: TNode<T>[];
};

export type { TConnection };
