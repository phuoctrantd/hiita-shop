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
      link: "/collections/nhan-sam",
      subMenu: [
        {
          id: 1,
          label: "Nhân sâm Hàn Quốc",
          link: "/collections/nhan-sam-han-quoc",
        },
        {
          id: 2,
          label: "Cao ly",
          link: "/collections/cao-ly",
        },
        {
          id: 3,
          label: "Nhân sâm Việt Nam",
          link: "/collections/nhan-sam-viet-nam",
        },
      ] as const, // Use as const to mark the array as readonly
    },
    {
      id: 4,
      label: "Trái cây nhập khẩu",
      link: "/collections/trai-cay-nhap-khau",
      subMenu: [
        {
          id: 1,
          label: "Táo",
          link: "/collections/tao",
        },
        {
          id: 2,
          label: "Nho",
          link: "/collections/nho",
        },
        {
          id: 3,
          label: "Kiwi",
          link: "/collections/kiwi",
        },
      ] as const, // Use as const to mark the array as readonly
    },

    {
      id: 5,
      label: "Tin tức",
      link: "/news",
    },
    {
        id: 6,
        label: "Câu hỏi thường gặp",
        link: "/faq",
      },
    {
      id: 6,
      label: "Liên hệ",
      link: "/contact",
    },
  ];


export const MENU_DATA_FOOTER = [
{
    title:"VỀ CHÚNG TÔI",
    data:[
        {
            id: 1,
            label: "Giới thiệu",
            link: "/about",
        },
        {
            id: 2,
            label: "Tin tức",
            link: "/news",
        },
        {
            id: 3,
            label: "Liên hệ",
            link: "/contact",
        },
    ]
},
{
    title:"sản phẩm",
    data:[
      {
        id: 1,
        label: "Nhân sâm",
        link: "/collections/nhan-sam",
      },
      {
        id: 2,
        label: "Trái cây nhập khẩu",
        link: "/collections/trai-cay-nhap-khau",
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
            link: "/faq",
        },
        {
            id: 2,
            label: "Chính sách đổi trả",
            link: "/faq",
        },
        {
            id: 3,
            label: "Chính sách bảo mật",
            link: "/faq",
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

export const formatPrice = (price: number) => {
return  price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " VND";
}
export const generateSlug = (name:string,id:number) => {
return name.replace(/\s+/g, '-').toLowerCase() + "-i." + id;
}
export const getInfoCategory = (slug:string) => {
  switch(slug){
    case "nhan-sam"
    : return {id:1,name:"Nhân sâm"};
    case "nhan-sam-han-quoc"
    : return {id:2,name:"Nhân sâm Hàn Quốc"};
    case "cao-ly"
    : return {id:3,name:"Cao ly"};
    case "nhan-sam-viet-nam"
    : return {id:4,name:"Nhân sâm Việt Nam"};
    case "trai-cay-nhap-khau"
    : return {id:5,name:"Trái cây nhập khẩu"};
    case "tao"
    : return {id:6,name:"Táo"};
    case "nho"
    : return {id:7,name:"Nho"};
    case "kiwi"
    : return {id:8,name:"Kiwi"};
    default: return {id:0, name:""};
  }
}

export const priceRange = [
  {
    id:1,
    label:"Dưới 500.000đ",
    min:0,
    max:500000
  },
  {
    id:2,
    label:"500.000đ - 1.000.000đ",
    min:500000,
    max:1000000
  },
  {
    id:3,
    label:"1.000.000đ - 2.000.000đ",
    min:1000000,
    max:2000000
  },
  {
    id:4,
    label:"2.000.000đ - 3.000.000đ",
    min:2000000,
    max:3000000
  },
  {
    id:5,
    label:"3.000.000đ - 5.000.000đ",
    min:3000000,
    max:5000000
  },
  {
    id:6,
    label:"Trên 5.000.000đ",
    min:5000000,
    max:1000000000
  },
]


export const getIdFromSlug = (slug:string) => {
return slug.split("-i.")[1];
}


  