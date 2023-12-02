interface MenuItem {
    id: number;
    label: string;
    link: string;
    subMenu?: readonly MenuItem[]; // Use readonly here
  }
  
  export const MENU_DATA: MenuItem[] = [
    {
      id: 1,
      label: "Trang chủ",
      link: "/",
    },
    {
      id: 2,
      label: "Giới thiệu ",
      link: "/about",
    },
    {
      id: 3,
      label: "Nhân sâm",
      link: "/",
      subMenu: [
        {
          id: 1,
          label: "Nhân sâm Hàn Quốc",
          link: "/",
        },
        {
          id: 2,
          label: "Cao ly",
          link: "/",
        },
        {
          id: 3,
          label: "Nhân sâm Việt Nam",
          link: "/",
        },
      ] as const, // Use as const to mark the array as readonly
    },
    {
      id: 4,
      label: "Trái cây nhập khẩu",
      link: "/",
      subMenu: [
        {
          id: 1,
          label: "Táo",
          link: "/",
        },
        {
          id: 2,
          label: "Nho",
          link: "/",
        },
        {
          id: 3,
          label: "Kiwi",
          link: "/",
        },
      ] as const, // Use as const to mark the array as readonly
    },

    {
      id: 5,
      label: "Tin tức",
      link: "/",
    },
    {
        id: 6,
        label: "Câu hỏi thường gặp",
        link: "/",
      },
    {
      id: 6,
      label: "Liên hệ",
      link: "/",
    },
  ];


export const MENU_DATA_FOOTER = [
{
    title:"VỀ CHÚNG TÔI",
    data:[
        {
            id: 1,
            label: "Giới thiệu",
            link: "/",
        },
        {
            id: 2,
            label: "Tin tức",
            link: "/",
        },
        {
            id: 3,
            label: "Liên hệ",
            link: "/",
        },
    ]
},
{
    title:"sản phẩm",
    data:[
      {
        id: 1,
        label: "Nhân sâm",
        link: "/",
      },
      {
        id: 2,
        label: "Trái cây nhập khẩu",
        link: "/",
      },
      {
        id: 3,
        label: "Set quà tặng cao cấp",
        link: "/",
      },
      {
        id: 4,
        label: "Set quà tết",
        link: "/",
      },
    ]
},
{
    title:"Chính sách bán hàng",
    data:[
        {
            id: 1,
            label: "Chính sách giao hàng",
            link: "/",
        },
        {
            id: 2,
            label: "Chính sách đổi trả",
            link: "/",
        },
        {
            id: 3,
            label: "Chính sách bảo mật",
            link: "/",
        },
    ]
    
},
{
    title:"Theo dõi chúng tôi",
    data:[
        {
            id: 1,
            label: "Facebook",
            link: "/",
        },
        {
            id: 2,
            label: "Instagram",
            link: "/",
        },
    ]
}

    
] as const;

export const formatPrice = (price: string) => {
return  price.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " VNĐ";
}
export const generateSlug = (name:string,id:number) => {
return name.replace(/\s+/g, '-').toLowerCase() + "-i." + id;
}