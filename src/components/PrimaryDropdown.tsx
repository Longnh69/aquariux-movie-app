import { FC, useState } from 'react';
import { DropdownItem } from '../types/ComponentsTypes';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

interface DropdownProps {
  items: DropdownItem[];
  selected: string;
  onSelect: (value: any) => void;
  prefix?: string;
}

export const Dropdown: FC<DropdownProps> = ({
  items,
  selected,
  onSelect,
  prefix,
}) => {
  const [open, setOpen] = useState(false);
  const current = items.find(i => i.value === selected);

  return (
    <View style={styles.dropdownWrapper}>
      <TouchableOpacity
        onPress={() => setOpen(o => !o)}
        activeOpacity={0.85}
        style={[styles.dropdownTrigger, open && styles.dropdownTriggerOpen]}
      >
        <Text style={styles.dropdownTriggerText}>
          {prefix && <Text style={styles.dropdownPrefix}>{prefix} </Text>}
          <Text style={styles.dropdownSelected}>{current?.label}</Text>
        </Text>
        <Text
          style={[styles.dropdownChevron, open && styles.dropdownChevronOpen]}
        >
          ▼
        </Text>
      </TouchableOpacity>

      {open && (
        <View style={styles.dropdownMenu}>
          {items.map(item => (
            <TouchableOpacity
              key={item.value}
              onPress={() => {
                onSelect(item.value);
                setOpen(false);
              }}
              activeOpacity={0.75}
              style={[
                styles.dropdownItem,
                item.value === selected && styles.dropdownItemActive,
              ]}
            >
              <Text
                style={[
                  styles.dropdownItemText,
                  item.value === selected && styles.dropdownItemTextActive,
                ]}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};
