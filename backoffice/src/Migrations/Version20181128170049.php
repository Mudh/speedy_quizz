<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20181128170049 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE user_joker DROP FOREIGN KEY FK_76242FCF32202C87');
        $this->addSql('DROP TABLE joker');
        $this->addSql('DROP TABLE user_joker');
        $this->addSql('ALTER TABLE app_users ADD joker_skip INT NOT NULL, ADD joker_5050 INT NOT NULL, ADD joker_revive INT NOT NULL, ADD joker_timer INT NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE joker (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(100) NOT NULL COLLATE utf8mb4_unicode_ci, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user_joker (user_id INT NOT NULL, joker_id INT NOT NULL, INDEX IDX_76242FCFA76ED395 (user_id), INDEX IDX_76242FCF32202C87 (joker_id), PRIMARY KEY(user_id, joker_id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE user_joker ADD CONSTRAINT FK_76242FCF32202C87 FOREIGN KEY (joker_id) REFERENCES joker (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_joker ADD CONSTRAINT FK_76242FCFA76ED395 FOREIGN KEY (user_id) REFERENCES app_users (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE app_users DROP joker_skip, DROP joker_5050, DROP joker_revive, DROP joker_timer');
    }
}
