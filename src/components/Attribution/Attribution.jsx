import { GithubMark, IconMail } from '../Icons'

function Attribution() {
  return (
    <div className="-translate-x-4 w-[calc(100%_+_2rem)] pt-4 px-8 border-t border-gray-200 text-center">
      <div className="">
        <div className="text-sm font-medium text-gray-500 mb-2">
          Виконавець
        </div>
        <div className="text-center">
          <div className="">Бабенко Олексій</div>
          <div className="">ІПЗ-22-2м</div>
        </div>
      </div>

      <div className="flex justify-evenly pt-4 mt-4 border-t border-gray-200">
        <GithubMark className="block w-7 h-7 hover:opacity-70 cursor-pointer" />
        <IconMail className="block w-7 h-7 hover:opacity-70 cursor-pointer" />
      </div>
    </div>
  )
}

export default Attribution
