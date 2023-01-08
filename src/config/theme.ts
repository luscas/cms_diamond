import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  components: {
    Divider: {
      baseStyle: {
        borderColor: "#2E313E",
        my: 6,
      },
    },
    Card: {
      variants: {
        contained: {
          container: {
            background: "#0E1020",
            borderWidth: 1,
            borderColor: "#2E313E80",
            color: "#fff",
            borderRadius: "8px",
          },
          header: {
            padding: 6,
          },
          body: {
            padding: 6,
          },
        },
      },
      sizes: {},
      defaultProps: {
        variant: "contained", // null here
      },
    },
    Heading: {
      baseStyle: {
        color: "#ffffff",
      },
    },
    Input: {
      baseStyle: {
        field: {
          bg: "#1C1F2E",
          borderColor: "transparent",
          borderWidth: 2,
          fontSize: 14,
          color: "#fff",
          _hover: {
            borderColor: "#2E313E",
          },
          ":focus": {
            borderColor: "#2D64F6",
          },
        },
      },
      sizes: {
        xl: {
          field: {
            fontSize: "lg",
            fontWeight: "medium",
            "--chakra-space-10": "54px",
            px: 6,
            py: 4,
            rounded: "lg",
          },
        },
      },
      variants: {},
      defaultProps: {
        variant: null, // null here
      },
    },
    Select: {
      baseStyle: {
        field: {
          bg: "#1C1F2E",
          borderColor: "transparent",
          borderWidth: 1,
          fontSize: 14,
          color: "#fff",
          "&:invalid": {
            color: "#5C667A",
          },
          ":focus": {
            borderColor: "blue.500",
          },
        },
      },
      sizes: {
        xl: {
          field: {
            fontSize: "lg",
            fontWeight: "medium",
            rounded: "lg",
            py: 5,
            px: 6,
          },
          icon: {
            mr: 2,
          },
        },
      },
      variants: {},
      defaultProps: {
        variant: null, // null here
      },
    },
    Table: {
      baseStyle: {
        th: {
          "--chakra-fontSizes-xs": "14px",
          fontFamily: "Ubuntu Condensed",
          fontWeight: "normal",
          color: "#5C667A",
          position: "relative",
          borderBottom: "1px solid #2E313E",
          "&:hover": {
            color: "#fff",
          },
        },
        tbody: {
          tr: {
            color: "#ffffff",
            "td:first-of-type": {
              fontSize: 14,
              fontFamily: "Ubuntu Condensed",
              color: "#5C667A",
            },
            "&:hover": {
              bg: "#1C1F2E",
            },
          },
        },
      },
      variants: {},
      defaultProps: {
        variant: null,
      },
    },
    Button: {
      variants: {
        gradient: {
          bgGradient: "linear(to-b, #5886F6, #225CF2)",
          fontFamily: "Ubuntu Condensed",
          fontWeight: 400,
          color: "#ffffff",
          px: 6,
          py: "18px",
          "& svg": {
            color: "#ffffff",
            marginRight: 2,
          },
          _disabled: {
            bg: "#5C667A",
            opacity: 1,
          },
          "&:hover[disabled]": {
            bg: "#5C667A",
          },
        },
      },
      sizes: {
        xl: {
          fontSize: 20,
          fontFamily: "Ubuntu Condensed",
          px: 5,
          py: 4,
          rounded: "lg",
        },
      },
    },
    Checkbox: {
      baseStyle: {
        icon: {
          color: "white",
        },
        control: {
          bg: "#1C1F2E",
          border: "1px",
          borderColor: "#1C1F2E",
          borderRadius: "4px",
          _disabled: {
            borderColor: "gray.300",
            bg: "gray.200",
          },
          _checked: {
            bg: "#2D64F6",
            borderColor: "#2D64F6",
          },
        },
        label: {
          "--chakra-fontSizes-lg": "14px",
          fontWeight: "medium",
          color: "#5C667A",
          _checked: {
            color: "white",
          },
        },
      },
    },
  },
});
