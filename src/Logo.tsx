import { SVGAttributes} from "react";

interface LogoProps extends SVGAttributes<HTMLOrSVGElement>{}

export function Logo(props: LogoProps) {
  return (
    <svg
      width={120}
      height={107}
      viewBox="0 0 120 107"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M120 53.445c0-7.95-9.955-15.483-25.218-20.155 3.522-15.557 1.957-27.933-4.941-31.896-1.59-.93-3.449-1.37-5.479-1.37V5.48c1.125 0 2.03.22 2.788.636 3.327 1.908 4.77 9.172 3.645 18.516-.27 2.3-.71 4.72-1.248 7.191-4.794-1.174-10.028-2.079-15.531-2.666-3.303-4.525-6.727-8.634-10.176-12.23C71.814 9.515 79.3 5.455 84.386 5.455V0C77.66 0 68.855 4.794 59.951 13.11 51.048 4.844 42.242.098 35.516.098v5.454c5.063 0 12.572 4.036 20.546 11.399A115.524 115.524 0 0045.96 29.156c-5.528.587-10.762 1.492-15.556 2.69a73.782 73.782 0 01-1.272-7.093c-1.15-9.343.269-16.608 3.57-18.54.735-.44 1.689-.636 2.814-.636V.122c-2.055 0-3.914.44-5.528 1.37-6.873 3.963-8.414 16.315-4.868 31.822C9.906 38.011 0 45.52 0 53.444c0 7.95 9.955 15.484 25.218 20.156-3.522 15.556-1.957 27.933 4.941 31.895 1.59.93 3.449 1.37 5.504 1.37 6.726 0 15.532-4.794 24.435-13.11 8.903 8.267 17.709 13.012 24.435 13.012 2.055 0 3.914-.44 5.528-1.37 6.873-3.962 8.414-16.314 4.868-31.822C110.094 68.903 120 61.37 120 53.445zM88.153 37.13c-.905 3.155-2.03 6.408-3.302 9.662a115.803 115.803 0 00-3.204-5.87c-1.125-1.957-2.324-3.865-3.522-5.724 3.473.513 6.824 1.15 10.028 1.932zM76.951 63.18c-1.908 3.302-3.865 6.433-5.895 9.343-3.645.318-7.338.49-11.056.49-3.693 0-7.387-.172-11.007-.465a134.832 134.832 0 01-5.92-9.295 127.399 127.399 0 01-5.087-9.735 127.573 127.573 0 015.063-9.76c1.908-3.301 3.865-6.432 5.895-9.343A127.26 127.26 0 0160 33.925c3.693 0 7.387.172 11.007.466 2.03 2.91 4.011 6.017 5.92 9.294a127.397 127.397 0 015.087 9.735 136.977 136.977 0 01-5.063 9.76zm7.9-3.18a104.838 104.838 0 013.376 9.735c-3.205.783-6.58 1.443-10.078 1.957 1.199-1.884 2.397-3.816 3.522-5.797A138.936 138.936 0 0084.851 60zM60.05 86.099c-2.275-2.349-4.55-4.966-6.8-7.828 2.201.098 4.452.172 6.726.172 2.3 0 4.574-.05 6.8-.171a95.488 95.488 0 01-6.726 7.827zM41.85 71.692c-3.474-.514-6.825-1.15-10.029-1.932.905-3.156 2.03-6.409 3.302-9.662a115.806 115.806 0 003.205 5.87 161.972 161.972 0 003.522 5.724zM59.927 20.79c2.274 2.348 4.55 4.965 6.8 7.827A151.478 151.478 0 0060 28.447c-2.3 0-4.574.049-6.8.171a95.468 95.468 0 016.727-7.827zm-18.1 14.407c-1.2 1.883-2.398 3.816-3.523 5.797a138.29 138.29 0 00-3.18 5.87 104.849 104.849 0 01-3.375-9.735c3.204-.758 6.58-1.419 10.077-1.932zM19.69 65.82c-8.659-3.693-14.26-8.536-14.26-12.376s5.601-8.708 14.26-12.377c2.104-.905 4.403-1.712 6.776-2.47 1.394 4.794 3.228 9.784 5.503 14.896-2.25 5.087-4.06 10.053-5.43 14.822a74.263 74.263 0 01-6.849-2.495zm13.16 34.954c-3.327-1.908-4.77-9.173-3.645-18.517.27-2.299.71-4.72 1.248-7.19 4.794 1.173 10.028 2.078 15.531 2.665 3.303 4.525 6.727 8.635 10.176 12.23-7.974 7.412-15.459 11.472-20.546 11.472-1.101-.024-2.03-.245-2.764-.66zm58.018-18.639c1.15 9.344-.269 16.608-3.57 18.541-.735.44-1.689.636-2.814.636-5.063 0-12.572-4.036-20.546-11.399A115.528 115.528 0 0074.04 77.71c5.528-.587 10.762-1.492 15.556-2.69.563 2.47 1.003 4.842 1.272 7.117zm9.417-16.315c-2.103.906-4.402 1.713-6.775 2.47-1.394-4.793-3.229-9.783-5.504-14.895 2.25-5.088 4.06-10.053 5.43-14.823 2.422.758 4.721 1.59 6.874 2.495 8.659 3.694 14.26 8.537 14.26 12.377-.025 3.84-5.626 8.708-14.285 12.376z"
        fill="#81D8F7"
      />
      <path
        d="M59.975 64.623c6.174 0 11.179-5.005 11.179-11.178 0-6.174-5.005-11.178-11.178-11.178-6.174 0-11.179 5.004-11.179 11.178 0 6.173 5.005 11.178 11.178 11.178z"
        fill="#81D8F7"
      />
    </svg>
  )
}