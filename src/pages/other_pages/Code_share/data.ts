interface List{
    id: number;
    title: string; //格式 : OJ - ID - Name
    author?: string
    href: string;
}

const myList : List[] = [
    { id: 1, title: 'None', href:'/other_pages/code_share' },
    { id: 2, title: 'UVa - 10071 - 熊', href:'https://hackmd.io/@LazyBear-1/uva10071' },
]
  
export const people = myList;

interface Problem{
    id: number;
    title: string;
    OJ: string;
    href: string;
}

const problems : Problem[] = [
    { id: 10071, title: 'Back to High School Physics', OJ:'UVa', href:'https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=1012' },
]
  
export const problem = problems;