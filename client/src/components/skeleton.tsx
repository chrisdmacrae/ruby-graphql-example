export type SkeletonProps = {
    variant?: "circle" | "rectangle"
    width?: number | string,
    height?: number | string
}

export const Skeleton = ({variant = "rectangle", ...props }: SkeletonProps) => {
    if (variant === "circle") return <CircleSkeleton {...props} />
    return <RectangleSkeleton {...props} />
}

const RectangleSkeleton = ({ width = 36, height = 6 }: SkeletonProps) => (
    <div className="w-full animate-pulse h-full space-x-5">
        <div className={`w-${width} h-${height} bg-gray-300 h-6 rounded-md`} />
    </div>
)

const CircleSkeleton = ({ width = 12, height = 12 }: SkeletonProps) => (
    <div className="flex animate-pulse items-center h-full justify-center space-x-5">
        <div className={`w-${width} h-${height} bg-gray-300 rounded-full`} />
    </div>
)