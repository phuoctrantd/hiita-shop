import fruit_icon from "@/public/images/fruit_icon.png";
import nhansam_icon from "@/public/images/nhansam_icon.png";
import set_gift_icon from "@/public/images/set_gift_icon.png";
import tet_gift_icon from "@/public/images/tet_gift_icon.png";
export const MENU_DATA = [
    {
        id: 1,
        label: "Trang chủ",
        grid: 1,
        link: "/",
    },
    {
        id: 2,
        label: "Giới thiệu ",
        grid: 1,
        link: "/about",
    },
    {
        id: 3,
        label: "Nhân sâm",
        grid: 1,
        link: "/",
    },
    {
        id: 4,
        label: "Trái cây nhập khẩu",
        grid: 1.5,
        link: "/",
    },
    {
        id: 5,
        label: "Tin tức",
        grid: 1,
        link: "/",
    },
    {
        id: 6,
        label: "Câu hỏi thường gặp",
        grid: 1.5,
        link: "/",
    },
    {
        id: 7,
        label: "Liên hệ",
        grid: 1,
        link: "/",
    },
    
] as const;

export const MENU_DATA_CATEGORY = [
    {
        id: 1,
        label: "Nhân sâm",
        link: "/",
        icon:nhansam_icon
    },
    {
        id: 2,
        label: "Trái cây nhập khẩu",
        link: "/",
        icon:fruit_icon
    },
    {
        id: 3,
        label: "Set quà tặng cao cấp",
        link: "/",
        icon:set_gift_icon
    },
    {
        id: 4,
        label: "Set quà tết",
        link: "/",
        icon:tet_gift_icon
    },
    
] as const;

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