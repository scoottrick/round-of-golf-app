import { TrashIcon } from '@heroicons/react/outline';
import { FC } from 'react';
import { TextButton } from '../../components';

interface Props {
  value: string;
  onUpdate: (value: string) => void;
  removeable?: boolean;
  onRemove: () => void;
}
const GolferNameInput: FC<Props> = ({
  value,
  onUpdate,
  removeable,
  onRemove,
}) => {
  return (
    <div className="border-box pb-1 flex flex-row justify-between items-center border-b-2 border-b-gray-600 bg-transparent focus-within:border-b-green-600">
      <span className="grow shrink min-w-0">
        <input
          className="w-full h-full px-2 py-1 bg-transparent"
          type="text"
          value={value}
          size={20}
          onChange={e => onUpdate(e.target.value)}
        />
      </span>
      <span data-app-hidden={!removeable} className="pl-2">
        <TextButton onClick={onRemove} color="red">
          <TrashIcon className="w-5 inline" />
        </TextButton>
      </span>
    </div>
  );
};

export default GolferNameInput;
