import { SyncProductV1 } from '@/trpc';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@ui/select';

type Props = {
  // value={activeVariantExternalId}
  //         onChange={({ target: { value } }) =>
  //           setActiveVariantExternalId(value)
  //         }
  //         variants={variants}
  //         disabled={oneStyle}
  variants: SyncProductV1['variants'];
  disabled?: boolean;
  value?: string;
  onChange: (value: string) => void;
};
const VariantPicker = ({ variants, value, onChange, disabled }: Props) => {
  if (variants.length === (0 || 1)) return null;

  return (
    <Select value={value} onValueChange={onChange} disabled={disabled}>
      <SelectTrigger>
        <SelectValue>
          {variants.find((v) => v.external_id === value)?.name}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {variants.map(({ external_id = '', name }) => (
            <SelectItem key={external_id} value={external_id}>
              {name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default VariantPicker;
